import { Box } from "@chakra-ui/react";
import { useDatePickerStore } from '../store';

interface MonthYearPanelProps {
  styles: any
}
export const MonthYearPanel = ({ styles }: MonthYearPanelProps) => {

  const { monthYearPanelData } = useDatePickerStore()

  return <Box sx={styles.month_year_panel}>
    {monthYearPanelData}
  </Box>
}