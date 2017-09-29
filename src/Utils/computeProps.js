"use_strict";
import _ from "lodash";
module.exports = function(incomingProps, defaultProps) {
  // External props has a higher precedence
  let computedProps = {};

  incomingProps = _.clone(incomingProps);
  delete incomingProps.children;

  const incomingPropsStyle = incomingProps.style;
  delete incomingProps.style;

  // console.log(defaultProps, incomingProps);
  if (incomingProps) {
    _.assign(computedProps, defaultProps, incomingProps);
  } else {
    computedProps = defaultProps;
  }
  // Pass the merged Style Object instead
  if (incomingPropsStyle) {
    if (computedProps.style) {
      computedProps.style = [computedProps.style, incomingPropsStyle]
    } else {
      computedProps.style = incomingPropsStyle
    }
  }
  // console.log("computedProps ", computedProps);
  return computedProps;
};
