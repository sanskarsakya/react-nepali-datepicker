import { ICalendarState } from '../../entities/model/models';

export const selectEvents = (state: ICalendarState) => state.events;
export const selectCtx = (state: ICalendarState) => state.ctx;
