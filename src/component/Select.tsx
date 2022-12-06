import { FormControl, FormHelperText, InputLabel, MenuItem , Select as MUISelect} from "@mui/material";
import React from "react";
import CommonField from "./CommonField";


const Select = React.forwardRef<any,any>((props, ref) => (
  <CommonField ref={ref} component={SelectImpl} {...props} />
));

const SelectImpl = React.forwardRef<any,any>(
  (
    {
      label,
      name = "",
      variant,
      size,
      value,
      onChange,
      onBlur,
      error,
      helperText,
      style,
      defaultItem,
      items,
      nameField = "name",
      valueField = "value",
      ...restProps
    },
    ref
  ) => {
   
    let menuItems: any = [];
    if (items) {
      if (defaultItem) {
        menuItems = [defaultItem, ...items];
      } else {
        menuItems = [...items];
      }
    }

    return (
      <FormControl variant={variant} size={size} error={error} style={style}>
        <InputLabel id={`${name.replace(".", "-")}-label`}>{label}</InputLabel>
        <MUISelect
          labelId={`${name.replace(".", "-")}-label`}
          id={name.replace(".", "-")}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          label={label}
          ref={ref}
          {...restProps}
        >
          {menuItems.map((item: any) => (
            <MenuItem key={item[valueField]} value={item[valueField]}>
              {item[nameField]}
            </MenuItem>
          ))}
        </MUISelect>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    );
  }
);

export default Select;
