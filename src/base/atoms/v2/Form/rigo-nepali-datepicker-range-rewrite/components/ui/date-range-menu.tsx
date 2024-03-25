import { ChevronDownIcon } from "@chakra-ui/icons";
import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { selectEvents, useDatePickerStore } from "../store";

export const RangeMenu = () => {

    const state = useDatePickerStore()

    const { setStartAndEndDate } = selectEvents(state)

    const handleThisWeekClick = () => {
        const startDate = dayjs().startOf('week').format("YYYY-MM-DD")
        const endDate = dayjs().endOf('week').format("YYYY-MM-DD")

        setStartAndEndDate({
            startDate,
            endDate
        })
    }

    const handleThisMonthClick = () => {

        const startDate = dayjs().startOf('month').format("YYYY-MM-DD")
        const endDate = dayjs().endOf('month').format("YYYY-MM-DD")

        setStartAndEndDate({
            startDate,
            endDate
        })

    }

    return <Menu placement="bottom-end">
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
}