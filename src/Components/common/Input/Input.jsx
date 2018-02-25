import React from "react";
import RenderWithoutWrapper from "../RenderWithoutWrapper";
import ClassedWrapper from "../ClassedWrapper";

export const Input = ({
  labelId,
  labelClass,
  label,
  labelled,
  type,
  id,
  changeCallback,
  ...otherProps
}) => {
  if (labelled) {
    return (
      <RenderWithoutWrapper>
        <label
          htmlFor={id || ""}
          id={labelId || ""}
          className={labelClass || ""}
        >
          {label || null}
        </label>
        <input
          id={id}
          type={type || "text"}
          {...otherProps}
          onChange={changeCallback}
        />
      </RenderWithoutWrapper>
    );
  }
  return <input type={type} {...otherProps} />;
};

export default Input;
export const WrappedInput = ClassedWrapper(Input, undefined);
