import { machine } from './base-machine';
import { actions } from "./actions"
import { services } from "./services"

export const personalInformationMachine = machine.withConfig({
    actions: {...actions},
    services:{...services},
});

