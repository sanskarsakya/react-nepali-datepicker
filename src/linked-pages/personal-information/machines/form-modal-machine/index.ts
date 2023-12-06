import { fromPromise } from "xstate";
import { machine } from "./base-machine";

async function promiseFn() {
    return new Promise((res,) => {
        setTimeout(res, 2000);
    })
}

function bindFormHelpers({ context, event }: any) {
    const data = event.data
    context.reset = data.reset
    context.watch = data.reset
    context.getValues = data.getValues
}

export const modalFormMachine = machine.provide({
    actors: {
        promiseFn: fromPromise(promiseFn)
    },
    actions: {
        bindFormHelpers
    }
})