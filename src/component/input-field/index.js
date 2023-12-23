import * as React from "react";
import TextField from "@mui/material/TextField";

export default function InputField({
  placeholder,
  label,
  type,
  select,
  SelectProps,
  name,
  value,
  onChange,
  required,
  children,
  disabled,
  multiline,
  maxRows,
  error,
  id,
  helperText,
}) {
  return (
    <TextField
      multiline={multiline}
      maxRows={maxRows}
      disabled={disabled}
      label={label}
      fullWidth
      type={type}
      select={select}
      SelectProps={SelectProps}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      margin="normal"
      variant="standard"
      error={error}
      id={id}
      helperText={helperText}
    >
      {children}
    </TextField>
  );
}
