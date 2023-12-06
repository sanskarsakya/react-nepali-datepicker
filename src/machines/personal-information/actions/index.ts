// import { formNameProperties as currentAddressformNameProperties } from "../../../components/forms/current-address/form-name-properties";
// import { formNameProperties as personalInformationFormNameProperties } from "../../../components/forms/personal-information/form-name-properties";
import isEmpty from "lodash/isEmpty";
import {
    FORM_TYPE_CURRENT_ADDRESS,
    FORM_TYPE_PERMANENT_ADDRESS,
    FORM_TYPE_PERSONAL_INFORMATION,
} from "../constants"

function determineViewType(ctx: any, ) {
    console.log("determineViewType")
    ctx.viewType = "ADMIN"
}

function updateTrackers(ctx: any, evt: any) {
    debugger
    console.log("updateTracker")
    const formType = evt.data.formType

    if (!formType)
        ctx.trackers = Object.keys(evt.data.Data).map(key => {
            return key
        })
    else if (formType === FORM_TYPE_CURRENT_ADDRESS && !ctx.trackers.includes("currentAddress"))
        return ctx.trackers = ctx.trackers.concat("currentAddress")
    else if (formType === FORM_TYPE_PERMANENT_ADDRESS && !ctx.trackers.includes("permanentAddress"))
        return ctx.trackers = ctx.trackers.concat("permanentAddress")
    else if (formType === FORM_TYPE_PERSONAL_INFORMATION && !ctx.trackers.includes("personalInformation"))
        return ctx.trackers = ctx.trackers.concat("personalInformation")
}

function mountSetup(ctx: any, evt: any) {
    console.log("mountSetup")
    ctx.dispatch = evt.dispatch
}

function setFormHelperMethods(ctx: any, evt: any) {
    debugger
    console.log("setFormHelperMethods")
    ctx.reset = evt.reset
    ctx.getValues = evt.getValues
    ctx.watch = evt.watch
}


function bindPendingRequestToForm(ctx: any, evt: any) {
    debugger
    console.log("bindPendingRequestToForm", evt)
    const formType= evt.formType
    const mappedTrackes = Object.entries(ctx.pendingRequest).filter(([, value]) => {
        return !isEmpty(value)
    }).map(([key]) => {
        return key.toLowerCase()
    })

    ctx.tracker = mappedTrackes

    ctx?.reset?.({
        ...ctx?.getValues?.(),
        ...ctx.pendingRequest?.[formType]?.NewData
    })
}

function setCountries(ctx: any, evt: any) {
    console.log("setCountries", evt)


    // const formData = ctx?.getValues?.()
    evt?.data && evt.data.Data.forEach((data:any) => {
        const formattedData = {
            label: data.CountryName,
            value: data.CountryId
        }
        // if (+data.CountryId === +formData?.[currentAddressformNameProperties.Country.name]) {
        //     ctx?.reset?.({
        //         ...ctx?.getValues?.(),
        //         [currentAddressformNameProperties.Country.name]: formattedData
        //     })
        // }
        ctx.countries = ctx.countries.concat(formattedData)
    })
}

function setProvinces(ctx: any, evt: any) {
    console.log("setProvinces", evt)

    // const formData = ctx?.getValues?.()
    evt?.data && evt.data.Data.forEach((data:any) => {
        const formattedData = {
            label: data.Name,
            value: data.ProvinceId
        }
        ctx.provinces = ctx.provinces.concat(formattedData)
    })
}

function setDistricts(ctx: any, evt: any) {
    console.log("setDistricts", evt)

    // const formData = ctx?.getValues?.()
    // evt?.data && evt.data.Data.forEach((data:any) => {
    //     const formattedData = {
    //         label: data.Text,
    //         value: data.Value
    //     }
        
    // })
    ctx.districts = evt.data.Data
}

function cleanFormData(ctx: any, evt: any) {
    console.log("cleanFormData")
    const formType = evt.formType
    if (formType === FORM_TYPE_CURRENT_ADDRESS) {
        evt.data = {
            ...evt.data,
            // [currentAddressformNameProperties.Country.name]: evt.data[currentAddressformNameProperties.Country.name].value,
            // [currentAddressformNameProperties.Province.name]: evt.data[currentAddressformNameProperties.Province.name].value,
            // [currentAddressformNameProperties.District.name]: evt.data[currentAddressformNameProperties.District.name].value,
            // [currentAddressformNameProperties.Zone.name]: evt.data?.[currentAddressformNameProperties.District.name]?.value ?? null,
            // [currentAddressformNameProperties.LocalBody.name]: evt.data?.[currentAddressformNameProperties.LocalBody.name]?.value ?? null,
        }
    }
    if (formType === FORM_TYPE_PERSONAL_INFORMATION) {
        evt.data = {
            ...evt.data,
            // [personalInformationFormNameProperties.Gender.name]: evt.data[personalInformationFormNameProperties.Gender.name].value,
            // [personalInformationFormNameProperties.MaritalStatus.name]: evt.data[personalInformationFormNameProperties.MaritalStatus.name].value,
        }
    }
}

function cleanUp(ctx: any) {
    console.log("cleanUp")

    ctx.countries = []
    ctx.districts = []
    ctx.provinces = []

}

function setFormProvinceSelectItem(ctx: any, evt: any) {
    console.log("setFormProvinceSelectItem")
    const mappedTrackes = Object.entries(evt.data.Data).filter(([, value]) => {
        return !isEmpty(value)
    }).map(([key]) => {
        return key.toLowerCase()
    })

    ctx.tracker = mappedTrackes

    ctx?.reset?.({
        ...ctx?.getValues?.(),
        ...evt.data.Data?.CurrentAddress?.NewData
    })
}

function setPendingRequest(ctx: any, evt: any) {
    console.log("setPendingRequest")
    ctx.pendingRequest = evt.data.Data
}

export const actions = {
    determineViewType,
    cleanUp,
    setFormHelperMethods,
    setCountries,
    setDistricts,
    setProvinces,
    setPendingRequest,
    updateTrackers,
    setFormProvinceSelectItem,
    cleanFormData,
    mountSetup,
    bindPendingRequestToForm,
}