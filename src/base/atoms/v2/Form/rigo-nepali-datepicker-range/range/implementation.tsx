import { Button, Flex, FormLabel, Input } from "@chakra-ui/react"
import { RangeComponent } from "."
import React from "react"
import dayjs from "dayjs"
import { When } from "react-if"
import { ICalendarProps } from "../components/entities/model/models"

type dateValue = {
    startDate: string,
    endDate: string
}
interface DateRangeImplementationProps extends Partial<ICalendarProps> {
    value: dateValue,
    onCHange: (value: dateValue) => void
}

export const DateRangeImplementation = ({ value: _value }: DateRangeImplementationProps) => {
    const [value, setValue] = React.useState<{
        startDate: string;
        endDate: string
    }>({
        startDate: "",
        endDate: ""
    })
    const [disabelDateBefore, setDisabelDateBefore] = React.useState("")
    const [disabelDateAfter, setDisabelDateAfter] = React.useState("")
    const [isNepali, setIsNepali] = React.useState<boolean>(false)


    // FUNCTIONS
    React.useEffect(() => {
        if (_value) {
            setValue(_value)
        }
    }, [_value])

    const handleToggleContext = () => {
        setIsNepali(prev => !prev)
    }

    const handleDisableDateBeforeChange = (e: any) => {
        setDisabelDateBefore(e.target.value)
    }

    const handleDiableDateAfterChange = (e: any) => {
        setDisabelDateAfter(e.target.value)
    }

    const isStartDateBeforeEndDate = (startDate: string, endDate: string) => {
        if (!startDate || !endDate) {
            return true
        }
        return dayjs(startDate).isBefore(endDate)
    }

    const error = isStartDateBeforeEndDate(value.startDate, value.endDate) ? "" : "error"

    return <Flex direction="column" gap={2}>
        <pre>{JSON.stringify({
            value
        }, null, 2)}</pre>
        <Flex gap={2}>
            <Button size="sm" onClick={handleToggleContext}>Toggle Content (current: {isNepali ? "Nepali" : "English"})</Button>
            <Input placeholder="Disable Date Before" size="sm" value={disabelDateBefore} onChange={handleDisableDateBeforeChange} w="100px" />
            <Input placeholder="Disable Date After" size="sm" value={disabelDateAfter} onChange={handleDiableDateAfterChange} w="100px" />
        </Flex>

        <RangeComponent
            value={value}
            disabelDateAfter={disabelDateAfter}
            disabelDateBefore={disabelDateBefore}
            isNepali={isNepali}
            onChange={params => {

                setValue(prev => ({
                    ...prev,
                    ...(params.startDate && { startDate: params.startDate }),
                    ...(params.endDate && { endDate: params.endDate }),
                }))
            }}
            onError={error => console.log(error)}
        />
        <When condition={error}>
            <FormLabel color="red.600">{error}</FormLabel>
        </When>

    </Flex>
}