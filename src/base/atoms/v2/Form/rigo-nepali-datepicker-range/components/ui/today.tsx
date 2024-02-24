import { Box, Button } from '@chakra-ui/react'
import { selectCtx, selectEvents, useDatePickerStore } from '../store';

interface TodayProps {
    styles: any,
    onClose: any
    onChange: any,
}
const Today = ({ styles, onClose, onChange }: TodayProps) => {

    const state = useDatePickerStore()

    const { isTodayValid } = selectCtx(state)
    const { selectToday } = selectEvents(state)

    return <Box
        as={Button}
        sx={styles.today}
        isDisabled={!isTodayValid}
        onClick={() => {
            selectToday(onClose, onChange)
        }}

    >
        Today
    </Box>
}

export default Today