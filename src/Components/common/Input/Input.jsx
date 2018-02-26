import React from "react";
import PropTypes from "prop-types";
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
  className,
  flipped,
  ...otherProps
}) => {
  if (labelled) {
    if (flipped)
      return (
        <RenderWithoutWrapper>
          <input
            id={id}
            type={type || "text"}
            {...otherProps}
            onChange={changeCallback}
            className={`${
              type === "checkbox" || type === "radio" ? "" : "form-control"
            } ${className || ""}`}
          />
          <label
            htmlFor={id || ""}
            id={labelId || ""}
            className={labelClass || ""}
          >
            {label || null}
          </label>
        </RenderWithoutWrapper>
      );
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
          className={`${
            type === "checkbox" || type === "radio" ? "" : "form-control"
          } ${className || ""}`}
        />
      </RenderWithoutWrapper>
    );
  }
  return (
    <input
      type={type}
      {...otherProps}
      onChange={changeCallback}
      className={`${
        type === "checkbox" || type === "radio" ? "" : "form-control"
      } ${className || ""}`}
    />
  );
};

Input.propTypes = {
  labelId: PropTypes.string,
  labelClass: PropTypes.string,
  label: PropTypes.string,
  labelled: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  changeCallback: PropTypes.func,
  className: PropTypes.string,
  flipped: PropTypes.bool
};

PropTypes.defaultProps = {
  labelId: "",
  labelClass: "",
  label: "",
  labelled: false,
  type: "",
  id: "",
  className: "",
  flipped: false
};

export default Input;
export const WrappedInput = ClassedWrapper(Input, undefined);
