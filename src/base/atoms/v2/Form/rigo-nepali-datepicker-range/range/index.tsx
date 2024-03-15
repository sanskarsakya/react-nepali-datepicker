import { ChevronDownIcon } from "@chakra-ui/icons"
import {
    Box,
    Flex,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text
} from "@chakra-ui/react"
import dayjs from "dayjs"
import React from "react"
import { ADToBS, BSToAD, lookUp } from "../components/nepali-date-carburetor"
import { DatePicker } from "../components/ui"


interface RangeComponentProps {
    value: {
        startDate: string;
        endDate: string
    };
    isNepali: boolean;
    disabelDateBefore: string;
    disabelDateAfter: string;
    onChange: (params: { startDate: string, endDate: string }) => void
    onError: (error: string) => void
}
export const RangeComponent = ({ value, isNepali, disabelDateAfter, disabelDateBefore, onChange }: RangeComponentProps) => {

    const [_value, _setValue] = React.useState<{
        startDate: string;
        endDate: string
    }>({
        startDate: "",
        endDate: ""
    })

    React.useEffect(() => {
        if (value.startDate) {
            _setValue(prev => ({
                ...prev,
                startDate: value.startDate
            }))
        }
        if (value.endDate) {
            _setValue(prev => ({
                ...prev,
                endDate: value.endDate
            }))
        }
    }, [value.startDate, value.endDate, value])

    const handleDateChange = (name: string, newValue: string, type: string) => {

        if (type === "start") {
            onChange({
                startDate: newValue,
                endDate: _value.endDate,
            })


        } else {
            onChange({
                startDate: _value.startDate,
                endDate: newValue,
            })
        }


    }


    const handleThisWeekClick = () => {

        const startDate = dayjs().startOf('week').format('YYYY-MM-DD')
        const endDate = dayjs().endOf('week').format('YYYY-MM-DD')
        onChange({
            startDate,
            endDate
        })
    }

    const handleThisMonthClick = () => {

        if (isNepali) {
            const today = dayjs().format('YYYY-MM-DD');
            const convertedNepaliDate = ADToBS(today) as string
            const [year, month] = convertedNepaliDate.split("-")
            const dayInmonth = lookUp().get(+year)[+month]
            const startDate = dayjs(BSToAD(`${year}-${month}-01`)).format('YYYY-MM-DD')
            const endDate = dayjs(BSToAD(`${year}-${month}-${dayInmonth}`)).format('YYYY-MM-DD')

            onChange({
                startDate,
                endDate
            })

        } else {
            const startDate = dayjs().startOf('month').format('YYYY-MM-DD')
            const endDate = dayjs().endOf('month').format('YYYY-MM-DD')
            onChange({
                startDate,
                endDate
            })
        }
    }

    return <Flex direction="column" gap={2}>
        <Flex direction="column" gap={1}>
            <Text>Date Picker</Text>
            <Flex alignItems="flex-end">
                <Box w="120px">
                    <DatePicker
                        showToggle={false}
                        date={_value.startDate}
                        is_dark={false}
                        isNepali={isNepali}
                        onChange={date => {
                            handleDateChange("name", date, "start")
                        }}
                        disableDateAfter={disabelDateAfter}
                        disableDateBefore={disabelDateBefore}
                    />
                </Box>

                <Box w="120px">
                    <DatePicker
                        showToggle={false}
                        date={_value.endDate}
                        is_dark={false}
                        isNepali={isNepali}
                        onChange={(date) => {
                            handleDateChange("name", date, "end")
                        }}
                        disableDateAfter={disabelDateAfter}
                        disableDateBefore={disabelDateBefore}
                    />
                </Box>

                <Menu placement="bottom-end">
                    {({ isOpen }) => (
                        <>
                            <MenuButton borderRadius="none" isActive={isOpen} as={IconButton} icon={<ChevronDownIcon />} />
                            <MenuList >
                                <MenuItem onClick={handleThisWeekClick}>This Week</MenuItem>
                                <MenuItem onClick={handleThisMonthClick}>This Month</MenuItem>
                            </MenuList>
                        </>
                    )}
                </Menu>
            </Flex>

        </Flex>

    </Flex>
}