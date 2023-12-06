
// import { ApiClient } from '@rigotech/hrms-data'
import {
    FORM_TYPE_CURRENT_ADDRESS,
    FORM_TYPE_PERMANENT_ADDRESS,
    FORM_TYPE_PERSONAL_INFORMATION,
} from "../constants"

async function fetchPendingChangeRequest(ctx: any, evt: any) {
    console.log("fetchPendingChangeRequest")
    // todo: use api constant
    return new Promise((resolve, reject) => {
        resolve({
            Data: {
                currentAddress: {},
                permanentAddress: {},
                personalInformation: {}
            }
        })

    })
    // return ApiClient.get<any>({
    //     endpoint: `employee-record/change-request/pending-requests`,
    //     dispatch: ctx.dispatch,
    // })
}
async function fetchCountries(context: any, evt: any) {
    console.log("fetchCountries")
    // todo: use api constant

    return new Promise((resolve, reject) => {
        resolve({ Data: [{ CountryId: 1, CountryName: "Nepal" }] })
    })
}
async function fetchProvinces(context: any) {
    console.log("fetchProvinces")
    // todo: use api constant
    return new Promise((resolve, reject) => {
        resolve({ Data: [{ ProvinceId: 1, ProvinceName: "Province 3" }] })
    })
}
async function fetchDistricts(context: any) {
    console.log("fetchDistricts")
    // todo: use api constant
    return new Promise((resolve, reject) => {
        resolve({ Data: [{ DistrictId: 1, DistrictName: "Bagmati" }] })
    })
}

async function submitForm(ctx: any, evt: any) {
    debugger
    const data = evt.data
    const formType = evt.formType

    console.log("submitForm", data)

    if (formType === FORM_TYPE_CURRENT_ADDRESS) {
        // todo: use api constant

        return new Promise((res, rej) => {
            res({
                formType
            })
        })
    }
    if (formType === FORM_TYPE_PERMANENT_ADDRESS) {
        // todo: use api constant
        return new Promise((res, rej) => {
            res({
                formType
            })
        })
    }
    if (formType === FORM_TYPE_PERSONAL_INFORMATION) {
        // todo: use api constant
        return new Promise((res, rej) => {
            res({
                formType
            })
        })
    }
}

export const services = {
    fetchPendingChangeRequest,
    fetchCountries,
    fetchDistricts,
    fetchProvinces,
    submitForm,
}