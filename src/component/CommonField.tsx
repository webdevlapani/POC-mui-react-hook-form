import React, { FC } from "react";
import { Controller, useFormState } from "react-hook-form";

const CommonField: FC<any> = ({
      name,
      label,
      component: Component,
      rules,
      variant = "standard",
      ...rest
    }: any) => {
    const formState = useFormState();
    return (
      <Controller
        name={name}
        render={({ field: { onChange, onBlur, value, ref, ...field } }) => (
          <Component
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            ref={ref}
            error={Boolean(formState.errors && formState.errors[name])}
            helperText={formState.errors && formState.errors[name]?.message}
            label={label}
            variant={variant}
            {...rest}
            {...field}
          />
        )}
        rules={rules}
      />
    );
  }


export default CommonField;
