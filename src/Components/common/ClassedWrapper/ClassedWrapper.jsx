import React from "react";
import curry from "lodash/fp/curry";
import PropTypes from "prop-types";

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

ClassedWrapper.propTypes = {
  ComponentName: PropTypes.object,
  Component: PropTypes.object
};

export default curry(ClassedWrapper);
