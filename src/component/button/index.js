import React from "react";

export default function PrimaryButton({
  color,
  background,
  icon,
  title,
  onClick,
  width,
  className,
}) {
  return (
    <>
      <button
        type="button"
        className={className ? className : "w-full"}
        style={{
          background: background,
          // maxWidth: width ? width : "18vw",
          minHeight: "6vh",
          minWidth: "8vw",
          // width: width,
        }}
        class="rounded-full text-sm 
        px-5 py-2 text-center "
        onClick={onClick}
      >
        <div
          className={
            icon
              ? "flex flex-row justify-between items-center px-1"
              : "flex flex-row justify-center px-5"
          }
        >
          <span className="pe-4">{icon}</span>
          <span className="Roboto-Slab text-base" style={{ color: color }}>
            {title}
          </span>
        </div>
      </button>
    </>
  );
}
