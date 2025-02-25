import React from "react";

const Button = ({
  label,
  iconURL,
  textColor,
  borderColor,
  backgroundColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat
    text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}
         hover:border-coral-red hover:text-coral-red`
        : "bg-coral-red text-white hover:bg-white hover:text-coral-red border-coral-red"
    } rounded-full ${fullWidth && 'w-full'}"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
