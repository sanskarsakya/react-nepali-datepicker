import { Box } from "@chakra-ui/react";
import { selectCtx, useDatePickerStore } from '../store';

interface MonthYearPanelProps {
  styles: any
}
export const MonthYearPanel = ({ styles }: MonthYearPanelProps) => {

  const state = useDatePickerStore()

  const { monthYearPanelData } = selectCtx(state)

  return <Box sx={styles.month_year_panel}>
    {monthYearPanelData}
  </Box>
}