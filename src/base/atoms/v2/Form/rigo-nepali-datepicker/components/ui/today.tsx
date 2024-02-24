import { Box, Button } from '@chakra-ui/react'
import { useDatePickerStore } from '../store';

interface TodayProps {
    styles: any,
    onClose: any
    onChange:any,
}
const Today = ({  styles, onClose, onChange }: TodayProps) => {

    const { selectToday, isTodayValid } = useDatePickerStore( )

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