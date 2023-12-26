import{r as i}from"./index.LFf77hJu.js";import{g as s}from"./index.35H_NU9g.js";var f={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=i,x=Symbol.for("react.element"),m=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,v=p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function a(t,e,o){var r,n={},d=null,c=null;o!==void 0&&(d=""+o),e.key!==void 0&&(d=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)_.call(e,r)&&!y.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:x,type:t,key:d,ref:c,props:n,_owner:v.current}}u.Fragment=m;u.jsx=a;u.jsxs=a;f.exports=u;var l=f.exports;const R=()=>{const t=i.useRef(),e=i.useRef();return i.useEffect(()=>{e.current&&(s.set(e.current,{xPercent:-50,yPercent:-50}),s.set(t.current,{xPercent:-50,yPercent:-50}),window.addEventListener("mousemove",o=>{s.to("#cursor-outline",{duration:.8,x:o.clientX,y:o.clientY}),s.to("#cursor-dot",{duration:0,x:o.clientX,y:o.clientY})}))}),l.jsxs("div",{className:"absolute",children:[l.jsx("div",{ref:e,id:"cursor-dot",className:"fixed h-2 w-2 rounded-full bg-slate-50 pointer-events-none  z-50"}),l.jsx("div",{ref:t,id:"cursor-outline",className:"fixed h-8 w-8 rounded-full bg-slate-100 border-1 border-slate-50 pointer-events-none mix-blend-difference z-50"})]})};export{R as default};
