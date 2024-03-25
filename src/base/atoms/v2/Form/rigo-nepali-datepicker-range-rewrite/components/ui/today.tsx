import { Box, Button } from '@chakra-ui/react'
import { selectCtx, selectEvents, useDatePickerStore } from '../store';

interface TodayProps {
    styles: any,
}
const Today = ({ styles, }: TodayProps) => {

    const state = useDatePickerStore()

    const { isTodayValid } = selectCtx(state)
    const { selectToday } = selectEvents(state)

    return <Box
        as={Button}
        sx={styles.today}
        isDisabled={!isTodayValid}
        onClick={() => {
            selectToday()
        }}

    >
        Today
    </Box>
}

export default Today