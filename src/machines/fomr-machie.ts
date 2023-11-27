import { createMachine } from 'xstate'
export const formMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAYgGEAZAeQGUBRAbQAYBdRUABwHtZcAXXF3zsQAD0QAWAEwAaEAE9EADgCMAOgkBWJjqYB2HVIDMm6QF8zctFjyEia3BAA2YEgFkqAVQByAFQD6AGJUAEpuzGxIINy8AkIi4giasgqIegBsempKukwSRqrpmnpGFlYYOATEagBmXABOqP6oXACu+HyQaphtHfW4cN29fP1w-jVgfJX4UCQQQmAO+ABuXADWi9bT1XWNzcNdPe0jA7BDx6Ow45PTUAgEq5jocfgRESIx-ILCUYkSWmpNEoJABOPTFIzgkHpOSKBBKdJMNRGKQ6dIg0xSKQqJRSMogLa2HYNJotY5dDj1LjLAiYQaU6m0sDXKa2WbzQhLVYbNSEqr2Xakg4QNQMmn4OlnMVMlm3e4rLhPF5vVgfHhfeK-SSQjQGfQGdJKJSaIww1IIFQqdISQF64H-LR6FQg-F8uy1En7ckiiC4WAnTB8NS+-39QOytlzBZc9abCpEgWeskdLohgNBtNhvgRgh3B6K57fFWRTjql4JbVSNR6KQgkE5JhGPJKEESWGITSG5GabRGhtMKQm13x-kevbJzoQEg0TwAITcAEkAsEwu8op9y1qEBJG8i9OCmNCmIa9P92xaTWoVCZDKoa6DO8ObKPBf5YK0AEaofiTqOc-M8m6xJ7O+X4-pA8qPIWQjFmqsTfBW8K7kYKIoRITrHq2ILniCVbodoA5gkwRrWukFiWCA+BcBAcAiEBRBwRqPygIkAC0ZpwuxT7bPYjguIxm4sYgKimBoRQ6AUUi4ukRhtuaqjZIiuimPuIJMEC3EJmOQregJCFbpaSjdtoTotsaRg4kY55SCU1ZaMRRT1jkImaJpL5JsK5x9KcemakJFqnmodagtaEjpLWUgSCoclwnqV4qGiSg1hi-yuRR9HaV6KYikc3mDLlJxjBMrK5r5zFiIgWJVsF0L-OFuFRTFygmNWPaYc2uilOlI7uq+E6HMMlxeYVVzFTgkBlYh1qaEFoL1oeyQDsk55KLJgIJfoTCGYe-xub1HneqKVLipKk0Gek6TGfoOL1ialnnhtNqmjoq0yTdqh7cBOnZUdjISvSx0ymNbJnf52JPW1pm3RZq0PdFSI6L2RgYo2JpKJ9ibjp50r-VKgP-RGE3rmW+n+TJRnPfo6QqHoLYonocMFNWSnGgOeQSOj3XPvtWOHZmuCBqDFUBeoOigqexgcyCCWaOeO5GdFvZ6PWJSaCJXXlNzX1ZZOwZ+umeuhgL2bA6VxPwX5wvYiCahi2C0iyS2MvnqYRjVmpxGrepOSnhjmX9T6+tZob6aExAQuJOFNpYnWysZECWgqC70iAvZdNQltaWazxmWgd+fCThHaQp7iYKdtd2gYg9yS6gRtYGCRYXkWYQA */
    context: {
        values: { name: "asdf" },
        reset: null,
        getValues: null,
        watch: null,
        countries: [],
        provinces: [],
        districts: [],
    },

    initial: 'idle',

    states: {
        idle: {
            on: {
                MOUNT_FORM: "form_mounted"
            }
        },

        form_mounted: {
            entry: "setFormHelperMethods",

            states: {
                countries: {
                    invoke: {
                        src: "fetchCountries"
                    },
                    initial: "countries_fetching",
                    states: {
                        countries_fetching: {
                            invoke: {
                                src: "fetchCountries",
                                onDone: "countries_fetched"
                            }
                        },

                        countries_fetched: {
                            entry: "setCountries",
                            type: "final"
                        }
                    }
                },

                provinces: {
                    invoke: {
                        src: "fetchProvinces"
                    },
                    initial: "province_fetching",

                    states: {
                        province_fetching: {
                            invoke: {
                                src: "fetchProvinces",
                                onDone: "province_fetched"
                            }
                        },

                        province_fetched: {
                            type: "final",
                            entry: "setProvinces"
                        }
                    }
                },
                district: {
                    invoke: {
                        src: "fetchDistricts"
                    },
                    initial: "district_fetching",

                    states: {
                        district_fetching: {
                            invoke: {
                                src: "fetchDistricts",
                                onDone: "district_fetched"
                            }
                        },

                        district_fetched: {
                            type: "final",
                            entry: "setDistrict"
                        }
                    }
                }
            },

            type: "parallel",

            on: {
                SUBMIT_FORM: {
                    target: "form_submitted",
                    actions: "cleanFormData"
                }
            }
        },

        form_submitted: {
            invoke: {
                src: "submitForm",
                onDone: "idle"
            }
        }
    },

    on: {
        CLOSE: ".idle"
    }
}, {
    actions: {
        setFormHelperMethods: (ctx, evt) => {
            console.log("setFormHelperMethods")
            ctx.reset = evt.reset
            ctx.getValues = evt.getValues
            ctx.watch = evt.watch
        },
        setCountries: (ctx, evt) => {
            console.log("setCountries")
            ctx.countries = evt.data
        },
        setProvinces: (ctx, evt) => {
            console.log("setProvinces")
            ctx.provinces = evt.data
        },
        setDistrict: (ctx, evt) => {
            console.log("setDistrict")
            ctx.districts = evt.data
        },
        cleanFormData: (ctx, evt) => {
            console.log("cleanFormData")
            evt.data =  {
                ...evt.data,
                Country: evt.data.Country.value,
                Province: evt.data.Province.value,
                District: evt.data.District.value
            }
        
        }
    },
    services: {
        fetchCountries: async () => {
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
        },
        fetchProvinces: async () => {
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
        },
        fetchDistricts: async () => {
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
        },
        submitForm: async (ctx, evt) => {
            const data = evt.data
            console.log("submitForm", data)
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(data)
                }, 1000)
            })
        }
    }
})