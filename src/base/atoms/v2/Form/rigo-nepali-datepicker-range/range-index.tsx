import { Box, Flex, FormLabel, Button } from "@chakra-ui/react"
import dayjs from "dayjs"
import React from "react"
import NepaliDatepickerV2 from "."

export const RangeIndex = () => {
    const [error, setError] = React.useState("as")
    const [startDate, setStartDate] = React.useState("")
    const [endDate, setEndDate] = React.useState("")

    const handleDateChange = (name: string, value: string, type: string) => {
        console.log(name, { value, type })
        if (type === "start") {
            setStartDate(value)
            const isValid = isStartDateBeforeEndDate(value, endDate)

            if (!isValid) {
                setError("Start date should be before end date")
            } else {
                setError("")
            }
        } else {
            setEndDate(value)
            const isValid = isStartDateBeforeEndDate(startDate, value)

            if (!isValid) {
                setError("Start date should be before end date")
            } else {
                setError("")
            }
        }


    }
    const isStartDateBeforeEndDate = (startDate: string, endDate: string) => {
        return dayjs(startDate).isBefore(endDate)
    }

    const hadnleThisWeekClick = () => {
        const startDate = dayjs().startOf('week').format('YYYY-MM-DD')
        const endDate = dayjs().endOf('week').format('YYYY-MM-DD')
        setStartDate(startDate)
        setEndDate(endDate)
    }

    return <Flex direction="column" gap={2}>
        <Flex>
            <Button onClick={hadnleThisWeekClick}>This week</Button>
        </Flex>
        <Flex gap={2}>
            <Box w="200px">
                <NepaliDatepickerV2.Default
                    label='Start Date'
                    name='startDate'
                    value={startDate}
                    is_dark={false}
                    is_nepali={false}
                    onChange={(name: string, value: any) => {
                        handleDateChange(name, value.date, "start")
                    }}
                />
            </Box>

            <Box w="200px">
                <NepaliDatepickerV2.Default
                    name='endDate'
                    label='End Date'
                    value={endDate}
                    is_dark={false}
                    is_nepali={false}
                    onChange={(name: string, value: any) => {
                        handleDateChange(name, value.date, "end")
                    }}
                />
            </Box>
        </Flex>
        <FormLabel color="red.600">{error}</FormLabel>
    </Flex>
}