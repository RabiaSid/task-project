import { ReactNode } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import baseColors from "../../constant";

export default function SelectInput({
  label,
  value,
  onChange,
  children,
  HeaderValue,
  id,
  helperText,
  error,
}) {
  return (
    <>
      <FormControl variant="standard" sx={{ minWidth: 120 }} fullWidth>
        <InputLabel
          // id="demo-simple-select-standard-label"
          id={id}
        >
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={onChange}
          label={label}
          error={error}
        >
          <MenuItem
            value=""
            disabled={true}
            sx={{ background: "rgb(128, 189, 255, 0.1)" }}
          >
            <em
              style={{
                color: "#9caccb",
                fontStyle: "normal",
              }}
            >
              {HeaderValue}
            </em>
          </MenuItem>
          {children}
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText style={{ color: baseColors.errorColor }}>
          {helperText}
        </FormHelperText>
      </FormControl>
    </>
  );
}
