import { createMachine } from "xstate";

export const machine = createMachine(
    {
        /** @xstate-layout N4IgpgJg5mDOIC5QDMwBcDGALAtAWwENsBLAOzADpVMsyoKAHMUiOgJTAEcBXONK9CVJQAxBAD25CmQBu4gNaVq2fEVpTl6+kxbsuvWP010Es8RgJpikgNoAGALr2HiUA3GxiVya5AAPRABmADYAVgpggEZQu0iATjCAdgAmULi7ABYAGhAAT0QYgA4KZLiYtPiM4LjAu0SAX3qczVUhJUEtRjAAJ1hJAgAbAElSZHFuwm9SARo6MUlKM0UZlUI2lc6mXv7h0fHJ62njYVNSOQsp52dfd08p3wCEQMLi+LtY0IzIwMCv5OCcvknnZAhQMnYYqVgnVCsFag1GjlSOIIHBfC01uowDcPF5Dg9EDgMslAYTwnEKXFCrUvtS4tFCoiQBi1GRFhABtikCBbnifNzHsTSQhCpEwTF3qFEqEfsk6pEmSz1scoDi7viBYgAXlEJEQRQapT0oFQoVQqEFU1mR1WliNnQuttSIMRmMJpYNW5cfdNQhPsL4mLAul3i8MjKQqFFTbMWz7cJHX1nbs3QdJPHVdzeT7QI89SSdQhkolioVwbFYZ9RSWEc0Y6yNB0HVsky69u6phtIGq+aQCQgwskKNEJZlYTS4sLamK6u9Iv84hlColqhlozRbXGVV1dMIODw+D2c-4CtlC8HgiVCu9nhlAslIsFglV16sG+1ZgmdKw9-o+Bmj09E8EHzYUl1BRJajHZIvmfEtglfXBY0bT9tGYH8oH3AwjA6bss29IDHmhRIKElUM4kSL5wTPIFygNaFMmSZJqzsapAkaRogA */
        id: 'fetch-machine',
        initial: "fetching",
        states: {
            idle: {},
            fetching: {
                type:"parallel",
                states:{
                    personalInformation: {
                        initial: "fetching",
                        states: {
                            fetching: {
                                invoke: {
                                    src: "fetchPersonalInformation",
                                    onDone: {
                                        target: "fetched",
                                        actions: "setPersonalInformation"
                                    }
                                }
                            },
                            fetched: {
                                type: "final"
                            }
                        }
                    },
                    pendingRequest: {
                        initial: "fetching",
                        states: {
                            fetching: {
                                invoke: {
                                    src: "fetchPendingRequest",
                                    onDone: {
                                        target: "fetched",
                                        actions: "setPendingRequest"
                                    }
                                }
                            },
                            fetched: {
                                type: "final"
                            }
                        }
                    },
                }
                
            },
        },
    },
    
);