import React from "react";
import baseColors from "../../constant";

export default function SearchField({
  label,
  backgroundColor,
  borderRadius,
  value,
  onChange,
  placeholder,
}) {
  return (
    <div>
      {label ? (
        <h1
          className="text-start text-2xl pb-2 font-semibold"
          style={{ color: baseColors.secondaryColor }}
        >
          {label}
        </h1>
      ) : null}
      <input
        type="text"
        className="drop-shadow-lg px-4 me-2 input-field"
        placeholder={placeholder}
        style={{
          backgroundColor: backgroundColor ? backgroundColor : baseColors.white,
          borderRadius: borderRadius ? borderRadius : "25px",
          width: 280,
          minHeight: "6vh",
        }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
