import { createMachine } from "xstate";

export const machine = createMachine(
    {
        "context": {
            "reset": "null",
            "watch": "null",
            "detail": {
                "name": "asdf"
            },
            "countries": [],
            "districts": [],
            "getValues": "null",
            "provinces": []
        },
        "id": "form machine",
        "initial": "idle",
        "states": {
            "idle": {
                "on": {
                    "MOUNT_FORM": [
                        {
                            "target": "form_mounted",
                            "cond": "isCreateMode"
                        },
                        {
                            "target": "form_mounted_edit"
                        }
                    ]
                }
            },
            "form_mounted": {
                "entry": {
                    "type": "setFormHelperMethods"
                },
                "states": {
                    "countries": {
                        "invoke": {
                            "src": "fetchCountries"
                        },
                        "initial": "countries_fetching",
                        "states": {
                            "countries_fetching": {
                                "invoke": {
                                    "src": "fetchCountries",
                                    "onDone": [
                                        {
                                            "target": "countries_fetched"
                                        }
                                    ]
                                }
                            },
                            "countries_fetched": {
                                "entry": {
                                    "type": "setCountries"
                                },
                                "type": "final"
                            }
                        }
                    },
                    "provinces": {
                        "invoke": {
                            "src": "fetchProvinces"
                        },
                        "initial": "province_fetching",
                        "states": {
                            "province_fetching": {
                                "invoke": {
                                    "src": "fetchProvinces",
                                    "onDone": [
                                        {
                                            "target": "province_fetched"
                                        }
                                    ]
                                }
                            },
                            "province_fetched": {
                                "entry": {
                                    "type": "setProvinces"
                                },
                                "type": "final"
                            }
                        }
                    },
                    "district": {
                        "invoke": {
                            "src": "fetchDistricts"
                        },
                        "initial": "district_fetching",
                        "states": {
                            "district_fetching": {
                                "invoke": {
                                    "src": "fetchDistricts",
                                    "onDone": [
                                        {
                                            "target": "district_fetched"
                                        }
                                    ]
                                }
                            },
                            "district_fetched": {
                                "entry": {
                                    "type": "setDistrict"
                                },
                                "type": "final"
                            }
                        }
                    }
                },
                "on": {
                    "SUBMIT_FORM": {
                        "target": "form_submitted",
                        "actions": {
                            "type": "cleanFormData"
                        }
                    }
                },
                "type": "parallel"
            },
            "form_mounted_edit": {
                "entry": {
                    "type": "setFormHelperMethods"
                },
                "states": {
                    "countries": {
                        "initial": "countries_fetching",
                        "states": {
                            "countries_fetching": {
                                "invoke": {
                                    "src": "fetchCountries",
                                    "onDone": [
                                        {
                                            "target": "countries_fetched"
                                        }
                                    ]
                                }
                            },
                            "countries_fetched": {
                                "entry": {
                                    "type": "setCountries"
                                },
                                "type": "final"
                            }
                        }
                    },
                    "Detail": {
                        "initial": "detail_fetching",
                        "states": {
                            "detail_fetching": {
                                "invoke": {
                                    "src": "fetchDetail",
                                    "onDone": [
                                        {
                                            "target": "detail_fetched"
                                        }
                                    ]
                                }
                            },
                            "detail_fetched": {
                                "entry": {
                                    "type": "setDetail"
                                },
                                "initial": "province_fetching",
                                "states": {
                                    "province_fetching": {
                                        "invoke": {
                                            "src": "fetchProvinces",
                                            "onDone": [
                                                {
                                                    "target": "province_fetched"
                                                }
                                            ]
                                        }
                                    },
                                    "province_fetched": {
                                        "entry": {
                                            "type": "setProvinces"
                                        },
                                        "initial": "district_fetching",
                                        "states": {
                                            "district_fetching": {
                                                "invoke": {
                                                    "src": "fetchDistricts",
                                                    "onDone": [
                                                        {
                                                            "target": "district_fetched"
                                                        }
                                                    ]
                                                }
                                            },
                                            "district_fetched": {
                                                "entry": {
                                                    "type": "setDistrict"
                                                },
                                                "type": "final"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                "on": {
                    "SUBMIT_FORM": {
                        "target": "form_submitted",
                        "actions": {
                            "type": "cleanFormData"
                        }
                    }
                },
                "type": "parallel"
            },
            "form_submitted": {
                "invoke": {
                    "src": "submitForm",
                    "onDone": [
                        {
                            "target": "idle"
                        }
                    ]
                }
            }
        },
        "on": {
            "CLOSE": {
                "target": ".idle"
            }
        }
    },
    {
        actions: {
            setFormHelperMethods,
            setCountries,
            setProvinces,
            setDistrict,
            setDetail,
            cleanFormData,
        },
        services: {
            fetchCountries,
            fetchProvinces,
            fetchDistricts,
            fetchDetail,
            submitForm,
        },
        guards: {
            isCreateMode,
        },
        delays: {},
    },
);

// GUARDS
function isCreateMode(ctx: any, evt: any) {
    return evt.mode === "CREATE"
}

// ACTIONS
function setFormHelperMethods(ctx: any, evt: any) {
    console.log("setFormHelperMethods")
    ctx.reset = evt.reset
    ctx.getValues = evt.getValues
    ctx.watch = evt.watch
}
function setCountries(ctx: any, evt: any) {
    console.log("setCountries")
    ctx.countries = evt.data
}
function setProvinces(ctx: any, evt: any) {
    console.log("setProvinces")
    ctx.provinces = evt.data
}
function setDistrict(ctx: any, evt: any) {
    console.log("setDistrict")
    ctx.districts = evt.data
}
function cleanFormData(ctx: any, evt: any) {
    console.log("cleanFormData")
    evt.data = {
        ...evt.data,
        Country: evt.data.Country.value,
        Province: evt.data.Province.value,
        District: evt.data.District.value
    }
}
function setDetail(ctx: any, evt: any) {
    console.log("setDetail")
    ctx.detail = evt.data
    ctx?.reset?.({
        ...ctx?.getValues?.(),
        ...evt.data
    })
}

// SERVICES
async function fetchCountries() {
    console.log("fetchCountries")
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                {
                    label: "Nepal",
                    value: "nepal",
                }
            ]
            resolve(data)
        }, 1000)
    })
}
async function fetchProvinces() {
    console.log("fetchProvinces")
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                {
                    label: "Province 1",
                    value: "province_1",
                }
            ]
            resolve(data)
        }, 1000)
    })
}
async function fetchDistricts() {
    console.log("fetchDistricts")
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = [
                {
                    label: "Kathmandu",
                    value: "kathmandu",
                }
            ]
            resolve(data)
        }, 1000)
    })
}
async function submitForm(ctx: any, evt: any) {
    const data = evt.data
    console.log("submitForm", data)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1000)
    })
}
async function fetchDetail() {
    console.log("fetchDetail")
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = {
                Address: "aaa",
                Country: "",
                Province: "",
                District: "",
                Locality: "dd",
                HouseNo: "ff",
                Street: "gg",
                State: "hh",
                ZipCode: "jj",
                Zone: "kk",
            }
            resolve(data)
        }, 1000)
    })
}