import type { Meta } from '@storybook/react';
import NepaliDatepickerV2 from '.';
import { DateRangeImplementation } from './range/implementation';

const meta: Meta<typeof NepaliDatepickerV2> = {
  component: NepaliDatepickerV2,
  title: 'V2/Forms/Nepali Date Range Picker',
};

export default meta;

// const argsBase = {
//   value: dayjs(today).add(1, "month").format("YYYY-MM-DD"),
//   isNepali: true,
//   disableDateBefore: dayjs(today).subtract(1, "month").format("YYYY-MM-DD"),
//   disableDateAfter: dayjs(today).add(1, "month").format("YYYY-MM-DD"),
// }

export const EngDefault = {
  // args: argsBase,
  render: () => {
    return <DateRangeImplementation />
  },
};

