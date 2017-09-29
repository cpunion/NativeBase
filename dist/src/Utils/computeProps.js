"use_strict";
var _lodash=require("lodash");var _lodash2=_interopRequireDefault(_lodash);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
module.exports=function(incomingProps,defaultProps){

var computedProps={};

incomingProps=_lodash2.default.clone(incomingProps);
delete incomingProps.children;

var incomingPropsStyle=incomingProps.style;
delete incomingProps.style;


if(incomingProps){
_lodash2.default.assign(computedProps,defaultProps,incomingProps);
}else{
computedProps=defaultProps;
}

if(incomingPropsStyle){
if(computedProps.style){
computedProps.style=[computedProps.style,incomingPropsStyle];
}else{
computedProps.style=incomingPropsStyle;
}
}

return computedProps;
};
//# sourceMappingURL=computeProps.js.map