import React from "react";
import CommonField from "./CommonField";
import MUITextField from '@mui/material/TextField';


const TextField  = React.forwardRef<any,any>((props, ref) => (
  <CommonField ref={ref} component={MUITextField} {...props} />
));

export default TextField;
