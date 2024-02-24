import { lookUp } from '../../../nepali-date-carburetor';
import * as from_constants from "../../constants";
import { previous_month } from "./previous_month";
import { previous_year } from "./previous_year";

export const previous_month_days = (date: any) =>
    previous_year(date) >= from_constants.minBSYear
        ? lookUp().get(previous_year(date))[previous_month(date)]
        : 30