import { RigoComponent } from './rigo-component';
import { RigoDefault } from './rigo-default';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormHelperText } from './rigo-form-helper-text';
import { RigoFormLabel } from './rigo-form-label';
import { RigoTextarea } from './rigo-textarea';


/**
 *  
 *  
 ```tsx
 <TextAreaV2
    name="composed"
    label="Composed"
    required
    {...inputProps}>
    <TextAreaV2.FormControl>
      <Flex gap={2}>
        <TextAreaV2.FormLabel />
      </Flex>
      <TextAreaV2.Component />
      <TextAreaV2.HelperText />
      <TextAreaV2.ErrorLabel />
    </TextAreaV2.FormControl>
  </TextAreaV2>
 ```
```tsx
<TextAreaV2.Default
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
export const TextAreaV2 = (props: any) => {
  return <RigoTextarea {...props} />;
};

TextAreaV2.Default = RigoDefault;
TextAreaV2.FormLabel = RigoFormLabel;
TextAreaV2.HelperText = RigoFormHelperText;
TextAreaV2.ErrorLabel = RigoFormErrorLabel;
TextAreaV2.FormControl = RigoFormControl;
TextAreaV2.Component = RigoComponent;

export default TextAreaV2;
