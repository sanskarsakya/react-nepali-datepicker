import { Box, Flex, FormLabel, Button, Input } from "@chakra-ui/react"
import dayjs from "dayjs"
import React from "react"
import NepaliDatepickerV2 from "."
import { ADToBS, BSToAD, lookUp } from "./components/nepali-date-carburetor"

export const RangeIndex = () => {
    const [error, setError] = React.useState("as")
    const [startDate, setStartDate] = React.useState("")
    const [endDate, setEndDate] = React.useState("")
    const [disabelDateBefore, setDisabelDateBefore] = React.useState("")
    const [disabelDateAfter, setDisabelDateAfter] = React.useState("")
    const [isNepali, setIsNepali] = React.useState<boolean>(false)

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

    const handleThisWeekClick = () => {

        const startDate = dayjs().startOf('week').format('YYYY-MM-DD')
        const endDate = dayjs().endOf('week').format('YYYY-MM-DD')
        setStartDate(startDate)
        setEndDate(endDate)
    }

    const handleThisMonthClick = () => {

        if (isNepali) {
            const today = dayjs().format('YYYY-MM-DD');
            const convertedNepaliDate = ADToBS(today) as string
            const [year, month] = convertedNepaliDate.split("-")
            const dayInmonth = lookUp().get(+year)[+month]
            const convertedEnglishStartDate = dayjs(BSToAD(`${year}-${month}-01`)).format('YYYY-MM-DD')
            const convertedEnglishEndDate = dayjs(BSToAD(`${year}-${month}-${dayInmonth}`)).format('YYYY-MM-DD')

            setStartDate(convertedEnglishStartDate)
            setEndDate(convertedEnglishEndDate)

        } else {
            const startDate = dayjs().startOf('month').format('YYYY-MM-DD')
            const endDate = dayjs().endOf('month').format('YYYY-MM-DD')
            setStartDate(startDate)
            setEndDate(endDate)
        }
    }

    const handleToggleContext = () => {
        setIsNepali(prev => !prev)
    }

    const handleDisableDateBeforeChange = (e: any) => {
        setDisabelDateBefore(e.target.value)
    }

    const handleDiableDateAfterChange = (e: any) => {
        setDisabelDateAfter(e.target.value)
    }

    return <Flex direction="column" gap={2}>
        <Flex gap={2}>
            <Button size="sm" onClick={handleThisWeekClick}>This week</Button>
            <Button size="sm" onClick={handleThisMonthClick}>This Month</Button>
            <Button size="sm" onClick={handleToggleContext}>Toggle Content (current: {isNepali ? "Nepali" : "English"})</Button>

            <Input placeholder="Disable Date Before" size="sm" value={disabelDateBefore} onChange={handleDisableDateBeforeChange} w="100px" />
            <Input placeholder="Disable Date After" size="sm" value={disabelDateAfter} onChange={handleDiableDateAfterChange} w="100px" />
        </Flex>

        <Flex gap={2}>
            <Box w="200px">
                <NepaliDatepickerV2.Default
                    label='Start Date'
                    name='startDate'
                    disableDateAfter={disabelDateAfter}
                    disableDateBefore={disabelDateBefore}
                    // disabledWeekDays={[1,2]}
                    value={startDate}
                    is_dark={false}
                    isNepali={isNepali}
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
                    disableDateAfter={disabelDateAfter}
                    disableDateBefore={disabelDateBefore}
                    is_dark={false}
                    isNepali={isNepali}
                    onChange={(name: string, value: any) => {
                        handleDateChange(name, value.date, "end")
                    }}
                />
            </Box>
        </Flex>
        <FormLabel color="red.600">{error}</FormLabel>
    </Flex>
}