import { RigoComponent } from "./RigoComponent";
import { RigoDefault } from "./RigoDefault";
import { RigoFormControl } from "./RigoFormControl";
import { RigoFormErrorLabel } from "./RigoFormErrorLabel";
import { RigoFormHelperText } from "./RigoFormHelperText";
import { RigoFormLabel } from "./RigoFormLabel";
import { RigoInputText } from "./RigoInputText";
import {InputTextProps} from './interface';

/**
 *  
 *  
 ```tsx
 <InputTextV2
    name="composed"
    label="Composed"
    required
    {...inputProps}>
    <InputTextV2.FormControl>
      <Flex gap={2}>
        <InputTextV2.FormLabel />
      </Flex>
      <InputTextV2.Component />
      <InputTextV2.HelperText />
      <InputTextV2.ErrorLabel />
    </InputTextV2.FormControl>
  </InputTextV2>
 ```
```tsx
<InputTextV2.Default
    name="uncontrolled"
    label="Uncontrolled"
    value={"uncontrolled"}
    onChange={(name: string, value: string) => {
      console.log({ name, value });
    }}
  />
 ```
 * 
 * @param props 
 * @returns 
 */
export const InputTextV2 = (props: InputTextProps) => {
  return <RigoInputText {...props} />;
};

InputTextV2.Default = RigoDefault;
InputTextV2.FormLabel = RigoFormLabel;
InputTextV2.HelperText = RigoFormHelperText;
InputTextV2.ErrorLabel = RigoFormErrorLabel;
InputTextV2.FormControl = RigoFormControl;
InputTextV2.Component = RigoComponent;


export default InputTextV2;
