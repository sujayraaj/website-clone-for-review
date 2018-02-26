import React from "react";
import { WrappedInput } from "../../../common/Input";
import styles from "./RadioGroup.css";

export const RadioGroup = ({
  children,
  lables,
  lableFunction,
  callback,
  defaultSelected,
  className
}) => (
  <div role="group" aria-labelledby="questionTypeLabel" className={className}>
    {children}
    {lables.map((val, idx) => (
      <WrappedInput
        key={`questionTypeItem${idx}`}
        type="radio"
        name="questionType"
        labelId={`questionType${idx}`}
        label={lableFunction(`typeOptions.${idx}`)}
        labelled
        aria-labelledby={`questionType${idx}`}
        placeholder={lableFunction("titlePH")}
        checked={defaultSelected === idx}
        changeCallback={callback(idx)}
        labelClass={styles.radioGroupLabel}
        flipped
      />
    ))}
  </div>
);

export default RadioGroup;
