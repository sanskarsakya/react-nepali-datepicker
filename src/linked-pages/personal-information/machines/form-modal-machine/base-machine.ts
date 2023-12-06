import { createMachine } from "xstate";

export const machine = createMachine(
    {
        /** @xstate-layout N4IgpgJg5mDOIC5QFsD2ECGAbAYqgTsgLIYDGAFgJYB2YAdKVqrJAMQDyACgKIByA2gAYAuolAAHZpQAulVNTEgAHogCsAJgA0IAJ6IAHAEY6AFhMBOSyYBsh-TYDMAdnUBfV9rSZcBYmSq0dKjiYLQQrADCADLsAMrcQqJIIJKwMnIKySoI5oLWdNbqgoJO5rbWTg761tp6CIbqRnRlxZYlhqrmqtbunujYeIQkFDT0waFssQCqAEJEAJIAKomKqenyitn6TrWIhsVOdE4mreqGx-rm+m4eIF4DvsMBYyFhrETsU7yL3AAiK8k1rINlkDDtdGpzIcWoIOk5BCYXPZend+j4hv5RkFXpA6AAzMDSEbUKDzajpbC-DDSDAMVAAV2o0nwlDg+MJxKgrAg8noNAAbqgANb0e7ovzEl4TCDsokBUnk2SU6m00gMpkstkEuU0KAIAWoUjUjKJAESKTAzKgbIma50a7FBw2EzqcwOawmBy7BDWKrNfbFfSXdTOJz6FFiwYS57Y6WyzlkilYKk0ujifCofk0Uhajny7m8ugGkV0SOPTGBcZhePyxNK5MqtMZrPUHOwGu6-XUQVGy2mkSrC0ZTaIW3qe1FQROj2u92e732Bz24pThxrudhiNoqNPLFV3HahOKyjK1MQSiwZmUUjSduH-M8wLF0Xb8uS2PV++6usnhtni9Xjed55p2Bq9iaIhmikQ4gtao52g6U7OrOHpehCCCeiYdCwpY9gmKohj7E4TiqFu3g7hWUrVrA9IAEbIDIsgkgWT7dsK9A0fRMhRlBQLDqCOR5AUk6lOUlTVN6DROgUqiBoidiqBYhjuLc1DoHAihlhikqDmklojggAC05jeoZqjNJYllWVZDhkQ82kxowzCQLp6xWsoeyCEGRwdK0UKVI6kkhvkeSBs4LqFBodnirulY4hArn6QJDgmehhiInQ+wWOYrqqKolwESY0UUe++4ypQEBYGAiX8XBCDbN61j5XQ6jwjhrUelcTjFW+MZlR2JI-qeGA1bBHn1LkzQkcUtgpao8L2N6IZYXlFjbPNnr5fopG3Fp0Z7vFA0KkmKaquqV4aYCMHudkIb6FNsl5IYc0LSY3oaPklzZdt6ieo0Nx9ORvUHXGX6Dcew10oyF3ATqJKjTdiCNPkUKPbNXSvY16V0E6j3mOc6hFO6PUOSDn4geDJ2Nmq0OarDFAuVdem1eNTX5GYxTnKoDglHkqiNe6dDzbJhi2L5z22btr6k3FoMU8d9anU2mbZpd5rM2Nt1+qjM3PRjXlvehlTGGGsmE2UeVXCT+2y+TcMK7+Svpirra5vbCMGcjD26y9BsLoY5gtQ4slrrNiLB9bsVUQe8tDX+tLOy2bY1oz6tuQZbOmCcsIkTz8JNQuJjGDYIs2DlQaCDtgP2Tb0cymDDuQ+el4skBHsCXd3tPb7i3oQ4hPYQiUInPoPP5QDqJAzLddHXHSvN4Bt5He3dVezr3f673dQnIH+FreHghuu6kvVzFlEfjH9tz42C+t0v96p9BGuIz63RZ5zue8wX6GesY1j2JYUWlRjhOkjuffqnEGLSCYlAFe40ijQm2rCZGjgnTeiuFhCoslEQnH-v-SW7ggA */
        id: 'modalFormMachine',
        initial: 'closed',
        states: {
            closed: {
                on: {
                    OPEN: {
                        target: "opened"
                    }
                }
            },
            opened: {
                initial: "idle",
                on: {
                    CLOSE: {
                        target: "closed",
                    },

                    SUBMIT: {
                        target: "#modalFormMachine.opened.submitting"
                    },

                    MOUNT: {
                        target: ".fetchingInitialData",
                        actions:["bindFormHelpers"]
                    }
                },
                states: {
                    idle: {},
                    fetchingInitialData: {
                        type: "parallel",
                        states: {
                            countries: {
                                initial: "fetching",
                                states: {
                                    fetching: {
                                        invoke: {
                                            src: "promiseFn",
                                            onDone: "fetched"
                                        }
                                    },
                                    fetched: {
                                        type: "final"
                                    }
                                }
                            },
                            provinces: {
                                initial: "fetching",
                                states: {
                                    fetching: {
                                        invoke: {
                                            src: "promiseFn",
                                            onDone: "fetched"
                                        }
                                    },
                                    fetched: {
                                        type: "final"
                                    }
                                }
                            },
                            districts: {
                                initial: "fetching",
                                states: {
                                    fetching: {
                                        invoke: {
                                            src: "promiseFn",
                                            onDone: "fetched"
                                        }
                                    },
                                    fetched: {
                                        type: "final"
                                    }
                                }
                            }
                        }
                    },

                    submitting: {
                        invoke: {
                            id: "submitForm",
                            src: "promiseFn",
                            onDone: {
                                target: "#modalFormMachine.closed"
                            }
                        }
                    }
                }
            }
        },
    },
);