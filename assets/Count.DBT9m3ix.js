import{r as u}from"./index.DhYZZe0J.js";var l={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=u,a=Symbol.for("react.element"),c=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,d=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function i(t,e,o){var r,n={},f=null,p=null;o!==void 0&&(f=""+o),e.key!==void 0&&(f=""+e.key),e.ref!==void 0&&(p=e.ref);for(r in e)x.call(e,r)&&!m.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:a,type:t,key:f,ref:p,props:n,_owner:d.current}}s.Fragment=c;s.jsx=i;s.jsxs=i;l.exports=s;var y=l.exports;function E(t){const[e,o]=u.useState(0);return y.jsxs("span",{className:"btn btn-secondary br-6 d-flex f-center",onClick:()=>o(e+1),style:{width:"120px"},children:[t?.text," ",e]})}export{E as default};
