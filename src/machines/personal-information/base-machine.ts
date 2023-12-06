import { createMachine } from "xstate";

export const machine = createMachine(
  {
    context: {
      reset: null,
      watch: null,
      dispatch: null,
      trackers: [],
      viewType: "",
      countries: [],
      districts: [],
      getValues: null,
      provinces: [],
      pendingRequest: null,
    },
    id: "personal-information-copy",
    initial: "idle",
    states: {
      idle: {
        on: {
          ON_MOUNT: {
            target: "mounted",
          },
        },
      },
      mounted: {
        entry: [
          {
            type: "determineViewType",
          },
          {
            type: "mountSetup",
          },
        ],
        initial: "Pending Employee Change",
        states: {
          "Pending Employee Change": {
            initial: "fetching",
            states: {
              fetching: {
                invoke: {
                  src: "fetchPendingChangeRequest",
                  id: "invoke-rgo09",
                  onDone: [
                    {
                      target: "fetched",
                      actions: [
                        {
                          type: "setPendingRequest",
                        },
                        {
                          type: "updateTrackers",
                        },
                      ],
                    },
                  ],
                },
              },
              fetched: {
                type: "final",
              },
            },
          },
          "current_address_form": {
            initial: "idle",
            states: {
              idle: {
                on: {
                  ON_FORM_MOUNT: {
                    target: "mounted",
                    actions: [
                      {
                        type: "setFormHelperMethods",
                      },
                      {
                        type: "bindPendingRequestToForm",
                      },
                    ],
                  },
                },
              },
              mounted: {
                states: {
                  districts: {
                    initial: "fetching",
                    states: {
                      fetching: {
                        invoke: {
                          src: "fetchDistricts",
                          id: "invoke-9ar7u",
                          onDone: [
                            {
                              target: "fetched",
                              actions: {
                                type: "setDistricts",
                              },
                            },
                          ],
                        },
                      },
                      fetched: {
                        type: "final",
                      },
                    },
                  },
                  province: {
                    initial: "fetching",
                    states: {
                      fetching: {
                        invoke: {
                          src: "fetchProvinces",
                          id: "invoke-xcw9w",
                          onDone: [
                            {
                              target: "fetched",
                              actions: {
                                type: "setProvinces",
                              },
                            },
                          ],
                        },
                      },
                      fetched: {
                        type: "final",
                      },
                    },
                  },
                  countries: {
                    initial: "fetching",
                    states: {
                      fetching: {
                        invoke: {
                          src: "fetchCountries",
                          id: "invoke-b7svz",
                          onDone: [
                            {
                              target: "fetched",
                              actions: {
                                type: "setCountries",
                              },
                            },
                          ],
                        },
                      },
                      fetched: {
                        type: "final",
                      },
                    },
                  },
                },
                type: "parallel",
              },
            },
            on: {
              ON_CLOSE_CURRENT_ADDRESS_FORM: {
                target: "form_closed",
                actions: {
                  type: "cleanUp",
                },
              },
              ON_FORM_SUBMIT: {
                target: "form_submitted",
                actions: {
                  type: "cleanFormData",
                },
              },
            },
          },
          "form_closed": {
            type: "final",
          },
          "form_submitted": {
            invoke: {
              src: "submitForm",
              id: "invoke-7o4cl",
              onDone: [
                {
                  target: "form_closed",
                  actions: {
                    type: "updateTrackers",
                  },
                },
              ],
            },
          },
          "personal_information_form": {
            initial: "idle",
            states: {
              idle: {
                on: {
                  ON_FORM_MOUNT: {
                    target: "form_mounted",
                    actions: [
                      {
                        type: "setFormHelperMethods",
                      },
                      {
                        type: "bindPendingRequestToForm",
                      },
                    ],
                  },
                },
              },
              form_mounted: {
                type: "final",
              },
            },
            on: {
              ON_FORM_SUBMIT: {
                target: "form_submitted",
                actions: {
                  type: "cleanFormData",
                },
              },
              ON_CLOSE_PERSONAL_INFORMATION_FORM: {
                target: "form_closed",
                actions: {
                  type: "cleanUp",
                },
              },
            },
          },
          "family_form": {
            initial: "idle",
            states: {
              idle: {
                on: {
                  ON_FORM_MOUNT: {
                    target: "form_mounted",
                    actions: [
                      {
                        type: "setFormHelperMethods",
                      },
                      {
                        type: "bindPendingRequestToForm",
                      },
                    ],
                  },
                },
              },
              form_mounted: {
                type: "final",
              },
            },
            on: {
              ON_FORM_SUBMIT: {
                target: "form_submitted",
                actions: {
                  type: "cleanFormData",
                },
              },
              ON_CLOSE_FAMILY_FORM: {
                target: "form_closed",
                actions: {
                  type: "cleanUp",
                },
              },
            },
          },
          "health_form": {
            initial: "idle",
            states: {
              idle: {
                on: {
                  ON_FORM_MOUNT: {
                    target: "form_mounted",
                    actions: [
                      {
                        type: "setFormHelperMethods",
                      },
                      {
                        type: "bindPendingRequestToForm",
                      },
                    ],
                  },
                },
              },
              form_mounted: {
                type: "final",
              },
            },
            on: {
              ON_FORM_SUBMIT: {
                target: "form_submitted",
                actions: {
                  type: "cleanFormData",
                },
              },
              ON_CLOSE_HEALTH_FORM: {
                target: "form_closed",
                actions: {
                  type: "cleanUp",
                },
              },
            },
          },
        },
        on: {
          ON_OPEN_CURRENT_ADDRESS_FORM: {
            target: ".current_address_form",
          },
          ON_OPEN_PERSONAL_INFORMATION_FORM: {
            target: ".personal_information_form",
          },
          ON_OPEN_HEALTH_FORM: {
            target: ".health_form",
          },
        },
      },
    },
    on: {
      ON_OPEN_FAMILY_FORM: {
        target: ".mounted.family_form",
      },
    },
    schema: {
      events: {} as
        | { type: "" }
        | { type: "ON_MOUNT" }
        | { type: "ON_FORM_MOUNT" }
        | { type: "ON_FORM_SUBMIT" }
        | { type: "ON_OPEN_CURRENT_ADDRESS_FORM" }
        | { type: "ON_CLOSE_CURRENT_ADDRESS_FORM" }
        | { type: "ON_OPEN_PERSONAL_INFORMATION_FORM" }
        | { type: "ON_CLOSE_PERSONAL_INFORMATION_FORM" }
        | { type: "ON_OPEN_FAMILY_FORM" }
        | { type: "ON_OPEN_HEALTH_FORM" }
        | { type: "ON_CLOSE_FAMILY_FORM" }
        | { type: "ON_CLOSE_HEALTH_FORM" },
      context: {} as {
        reset: {};
        watch: {};
        dispatch: {};
        trackers: unknown[];
        viewType: string;
        countries: unknown[];
        districts: unknown[];
        getValues: {};
        provinces: unknown[];
        pendingRequest: {};
      },
    },
    predictableActionArguments: true,
    preserveActionOrder: true,
  },
  
);