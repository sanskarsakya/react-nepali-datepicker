// LIBS

import { useInterpret } from "@xstate/react";
import { formMachine } from "./form-machine";
import { GlobalFormStateContext } from "./context";
export const FormMachineProvider = (props:any) => {
  const formMachineService = useInterpret(formMachine);

  return <GlobalFormStateContext.Provider value={{ formMachineService }}>
  {props.children}
  </GlobalFormStateContext.Provider>
};

