import React from "react";
import curry from "lodash/fp/curry";

const DefaultComponent = props => <div {...props} />;

const ClassedWrapper = (
  ComponentName,
  Component,
  { wrapperProps, ...otherProps }
) => {
  const Wrapper = Component || DefaultComponent;
  return (
    <Wrapper {...wrapperProps}>
      <ComponentName {...otherProps} />
    </Wrapper>
  );
};

export default curry(ClassedWrapper);
