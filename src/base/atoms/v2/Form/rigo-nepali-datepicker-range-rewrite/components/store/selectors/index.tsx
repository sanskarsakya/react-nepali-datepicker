import { ICalendarState } from '../../entities/model/models';

export const selectEvents = (state: ICalendarState) => state.events;
export const selectCtx = (state: ICalendarState) => state.ctx;


// todo: [REFACTOR DATE]
export const selectDateValue = (state: ICalendarState) => {

    const ctx = state.ctx

    return ctx?.[ctx.currentDateSelection]
};
