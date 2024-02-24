import { GoogleMapProps } from './definition';
import { RigoComponent } from './rigo-component';
import { RigoDefault } from './rigo-default';
import { RigoFormControl } from './rigo-form-control';
import { RigoFormErrorLabel } from './rigo-form-error-label';
import { RigoFormHelperText } from './rigo-form-helper-text';
import { RigoFormLabel } from './rigo-form-label';
import { RigoGoogleMap } from './rigo-textarea';

export const GoogleMapV2 = (props: GoogleMapProps) => {
  return <RigoGoogleMap {...props} />;
};

GoogleMapV2.Default = RigoDefault;
GoogleMapV2.FormLabel = RigoFormLabel;
GoogleMapV2.HelperText = RigoFormHelperText;
GoogleMapV2.ErrorLabel = RigoFormErrorLabel;
GoogleMapV2.FormControl = RigoFormControl;
GoogleMapV2.Component = RigoComponent;

export default GoogleMapV2;
