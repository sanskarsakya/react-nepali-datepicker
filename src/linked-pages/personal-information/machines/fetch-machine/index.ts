import { fromPromise } from "xstate";
import { machine } from "./base-machine";
import { PerndingRequest, PersonalInformation } from "../mocks";

async function promiseFn() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("done")
        }, 2000);
    })
}

export async function fetchPersonalInformation() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(PersonalInformation)
        }, 2000);
    })
}

export async function fetchPendingRequest() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(PerndingRequest)
        }, 2000);
    })
}

function setPersonalInformation({ context, event }: any) {
    context.personalInformation = event.output.Data
}
function setPendingRequest({ context, event }: any) {
    context.pendingRequest = event.output.Data
}

export const fetchMachine = machine.provide({
    actors: {
        fetchPersonalInformation: fromPromise(fetchPersonalInformation),
        fetchPendingRequest: fromPromise(fetchPendingRequest)
    },
    actions: { setPersonalInformation, setPendingRequest }
})