import { Button, Flex, Input } from "@chakra-ui/react"
import { RangeComponent } from "."
import React from "react"

export const DateRangeImplementation = () => {
    // const [error, setError] = React.useState("as")
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
                console.log("$$", params)

                setValue(prev => ({
                    ...prev,
                    ...(params.startDate && { startDate: params.startDate }),
                    ...(params.endDate && { endDate: params.endDate }),
                }))
            }}
            onError={error => console.log(error)}
        />
    </Flex>
}