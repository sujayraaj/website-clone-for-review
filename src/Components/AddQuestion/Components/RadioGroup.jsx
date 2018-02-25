import React from "react";
import { WrappedInput } from "../../common/Input";

export const RadioGroup = ({
  children,
  lables,
  lableFunction,
  callback,
  defaultSelected
}) => (
  <div role="group" aria-labelledby="questionTypeLabel">
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
      />
    ))}
  </div>
);

export default RadioGroup;
