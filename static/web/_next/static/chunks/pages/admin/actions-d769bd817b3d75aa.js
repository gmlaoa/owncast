(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5685],{26803:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"}},56338:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=_interopRequireDefault(n(5661));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.default=a,e.exports=a},5661:function(e,t,n){"use strict";var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(42122)),o=_interopRequireWildcard(n(67294)),u=a(n(26803)),c=a(n(92074));function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_getRequireWildcardCache=function(e){return e?n:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=_getRequireWildcardCache(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}var UpOutlined=function(e,t){return o.createElement(c.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:u.default}))};UpOutlined.displayName="UpOutlined";var d=o.forwardRef(UpOutlined);t.default=d},8799:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;t.Z=void 0;var l=r(n(10434)),o=r(n(38416)),u=r(n(18698)),c=r(n(27424)),d=r(n(5085)),i=r(n(56338)),s=r(n(94184)),f=r(n(82122)),p=a(n(67294)),m=n(31929),v=r(n(93319)),h=r(n(3236)),x=n(51130),y=n(46549),b=n(47419),g=n(71434),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},j=p.forwardRef(function(e,t){var n=p.useContext(m.ConfigContext),a=n.getPrefixCls,r=n.direction,j=p.useContext(h.default),w=p.useState(!1),O=(0,c.default)(w,2),_=O[0],C=O[1],E=p.useRef(null);p.useImperativeHandle(t,function(){return E.current});var S=e.className,I=e.size,k=e.disabled,N=e.prefixCls,M=e.addonBefore,P=e.addonAfter,R=e.prefix,T=e.bordered,A=void 0===T||T,L=e.readOnly,U=e.status,q=e.controls,Z=__rest(e,["className","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls"]),F=a("input-number",N),H=(0,y.useCompactItemContext)(F,r),W=H.compactSize,B=H.compactItemClassnames,D=p.createElement(i.default,{className:"".concat(F,"-handler-up-inner")}),z=p.createElement(d.default,{className:"".concat(F,"-handler-down-inner")}),G="boolean"==typeof q?q:void 0;"object"===(0,u.default)(q)&&(D=void 0===q.upIcon?D:p.createElement("span",{className:"".concat(F,"-handler-up-inner")},q.upIcon),z=void 0===q.downIcon?z:p.createElement("span",{className:"".concat(F,"-handler-down-inner")},q.downIcon));var X=(0,p.useContext)(x.FormItemInputContext),K=X.hasFeedback,V=X.status,Y=X.isFormItemInput,J=X.feedbackIcon,Q=(0,g.getMergedStatus)(V,U),$=W||I||j,ee=p.useContext(v.default),et=null!=k?k:ee,en=(0,s.default)((er={},(0,o.default)(er,"".concat(F,"-lg"),"large"===$),(0,o.default)(er,"".concat(F,"-sm"),"small"===$),(0,o.default)(er,"".concat(F,"-rtl"),"rtl"===r),(0,o.default)(er,"".concat(F,"-borderless"),!A),(0,o.default)(er,"".concat(F,"-in-form-item"),Y),er),(0,g.getStatusClassNames)(F,Q),B,S),ea=p.createElement(f.default,(0,l.default)({ref:E,disabled:et,className:en,upHandler:D,downHandler:z,prefixCls:F,readOnly:L,controls:G},Z));if(null!=R||K){var er,el,eo=(0,s.default)("".concat(F,"-affix-wrapper"),(0,g.getStatusClassNames)("".concat(F,"-affix-wrapper"),Q,K),(el={},(0,o.default)(el,"".concat(F,"-affix-wrapper-focused"),_),(0,o.default)(el,"".concat(F,"-affix-wrapper-disabled"),e.disabled),(0,o.default)(el,"".concat(F,"-affix-wrapper-sm"),"small"===j),(0,o.default)(el,"".concat(F,"-affix-wrapper-lg"),"large"===j),(0,o.default)(el,"".concat(F,"-affix-wrapper-rtl"),"rtl"===r),(0,o.default)(el,"".concat(F,"-affix-wrapper-readonly"),L),(0,o.default)(el,"".concat(F,"-affix-wrapper-borderless"),!A),(0,o.default)(el,"".concat(S),!(M||P)&&S),el));ea=p.createElement("div",{className:eo,style:e.style,onMouseUp:function(){return E.current.focus()}},R&&p.createElement("span",{className:"".concat(F,"-prefix")},R),(0,b.cloneElement)(ea,{style:null,value:e.value,onFocus:function(t){var n;C(!0),null===(n=e.onFocus)||void 0===n||n.call(e,t)},onBlur:function(t){var n;C(!1),null===(n=e.onBlur)||void 0===n||n.call(e,t)}}),K&&p.createElement("span",{className:"".concat(F,"-suffix")},J))}if(null!=M||null!=P){var eu,ec="".concat(F,"-group"),ed="".concat(ec,"-addon"),ei=M?p.createElement("div",{className:ed},M):null,es=P?p.createElement("div",{className:ed},P):null,ef=(0,s.default)("".concat(F,"-wrapper"),ec,(0,o.default)({},"".concat(ec,"-rtl"),"rtl"===r)),ep=(0,s.default)("".concat(F,"-group-wrapper"),(eu={},(0,o.default)(eu,"".concat(F,"-group-wrapper-sm"),"small"===j),(0,o.default)(eu,"".concat(F,"-group-wrapper-lg"),"large"===j),(0,o.default)(eu,"".concat(F,"-group-wrapper-rtl"),"rtl"===r),eu),(0,g.getStatusClassNames)("".concat(F,"-group-wrapper"),Q,K),S);ea=p.createElement("div",{className:ep,style:e.style},p.createElement("div",{className:ef},ei&&p.createElement(y.NoCompactStyle,null,p.createElement(x.NoFormStyle,{status:!0,override:!0},ei)),(0,b.cloneElement)(ea,{style:null,disabled:et}),es&&p.createElement(y.NoCompactStyle,null,p.createElement(x.NoFormStyle,{status:!0,override:!0},es))))}return ea});t.Z=j},16373:function(e,t,n){"use strict";var a=n(64836).default,r=n(75263).default;t.default=void 0;var l=r(n(62704)),o=a(n(87412)),u=l.default;u.Header=l.Header,u.Footer=l.Footer,u.Content=l.Content,u.Sider=o.default,t.default=u},89277:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434));r(n(18698));var o=a(n(67294));r(n(13594));var u=r(n(28460)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},c=o.forwardRef(function(e,t){var n=e.ellipsis,a=e.rel,r=__rest(e,["ellipsis","rel"]),c=(0,l.default)((0,l.default)({},r),{rel:void 0===a&&"_blank"===r.target?"noopener noreferrer":a});return delete c.navigate,o.createElement(u.default,(0,l.default)({},c,{ref:t,ellipsis:!!n,component:"a"}))});t.default=c},21987:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=a(n(67294)),u=r(n(28460)),c=o.forwardRef(function(e,t){return o.createElement(u.default,(0,l.default)({ref:t},e,{component:"div"}))});t.default=c},15394:function(e,t,n){"use strict";var a=n(75263).default,r=n(64836).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(18698)),u=r(n(18475)),c=a(n(67294));r(n(13594));var d=r(n(28460)),__rest=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>t.indexOf(a)&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,a=Object.getOwnPropertySymbols(e);r<a.length;r++)0>t.indexOf(a[r])&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]]);return n},i=c.forwardRef(function(e,t){var n=e.ellipsis,a=__rest(e,["ellipsis"]),r=c.useMemo(function(){return n&&"object"===(0,o.default)(n)?(0,u.default)(n,["expandable","rows"]):n},[n]);return c.createElement(d.default,(0,l.default)({ref:t},a,{ellipsis:r,component:"span"}))});t.default=i},53740:function(e,t,n){"use strict";var a=n(64836).default;t.default=void 0;var r=a(n(89277)),l=a(n(21987)),o=a(n(15394)),u=a(n(34528)),c=a(n(89652)).default;c.Text=o.default,c.Link=r.default,c.Title=u.default,c.Paragraph=l.default,t.default=c},93645:function(e,t,n){"use strict";n.d(t,{u:function(){return getRoundingMethod}});var a={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function getRoundingMethod(e){return e?a[e]:a.trunc}},59910:function(e,t,n){"use strict";n.d(t,{Z:function(){return differenceInMilliseconds}});var a=n(19013),r=n(13882);function differenceInMilliseconds(e,t){return(0,r.Z)(2,arguments),(0,a.Z)(e).getTime()-(0,a.Z)(t).getTime()}},11699:function(e,t,n){"use strict";n.d(t,{Z:function(){return differenceInSeconds}});var a=n(59910),r=n(13882),l=n(93645);function differenceInSeconds(e,t,n){(0,r.Z)(2,arguments);var o=(0,a.Z)(e,t)/1e3;return(0,l.u)(null==n?void 0:n.roundingMethod)(o)}},54005:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/actions",function(){return n(29083)}])},29083:function(e,t,n){"use strict";n.r(t);var a=n(85893),r=n(65400),l=n(31059),o=n(97538),u=n(51024),c=n(56697),d=n(64749),i=n(74048),s=n(2307),f=n(53740),p=n(95089),m=n(58909),v=n(82261),h=n(5152),x=n.n(h),y=n(67294),b=n(37383),g=n(25588),j=n(75554),w=n(18454),O=n(89105),_=n(15578);let{Title:C,Paragraph:E}=f.default,S=x()(()=>n.e(7949).then(n.t.bind(n,77949,23)),{loadableGenerated:{webpack:()=>[77949]},ssr:!1}),I=x()(()=>Promise.resolve().then(n.t.bind(n,10775,23)),{loadableGenerated:{webpack:()=>[10775]},ssr:!1}),ActionModal=e=>{let{onOk:t,onCancel:n,open:r,action:i}=e,[s,f]=(0,y.useState)("url"),[h,x]=(0,y.useState)(""),[b,g]=(0,y.useState)(""),[j,w]=(0,y.useState)(""),[_,C]=(0,y.useState)(""),[E,S]=(0,y.useState)(""),[I,k]=(0,y.useState)(""),[N,M]=(0,y.useState)(!1);function save(){t(i,e.index,"html"===s?"":h,"html"===s?b:"",j,_,E,I,N),x(""),g(""),w(""),C(""),S(""),k(""),M(!1)}function canSave(){return"html"===s?""!==b&&""!==j:(0,O.jv)(h,["https:"])&&""!==j}(0,y.useEffect)(()=>{var e;f(((null==i?void 0:null===(e=i.html)||void 0===e?void 0:e.length)||0)>0?"html":"url"),x((null==i?void 0:i.url)||""),g((null==i?void 0:i.html)||""),w((null==i?void 0:i.title)||""),C((null==i?void 0:i.description)||""),S((null==i?void 0:i.icon)||""),k((null==i?void 0:i.color)||""),M((null==i?void 0:i.openExternally)||!1)},[i]);let P={disabled:!canSave()};return(0,a.jsx)(c.default,{destroyOnClose:!0,title:null==i?"Create New Action":"Edit Action",open:r,onOk:save,onCancel:n,okButtonProps:P,children:(0,a.jsxs)(o.default,{initialValues:i,children:["Add the URL for the external action you want to present."," ",(0,a.jsx)("strong",{children:"Only HTTPS URLs and embeds are supported."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/thirdparty/actions/",target:"_blank",rel:"noopener noreferrer",children:"Read more about external actions."})}),(0,a.jsx)(o.default.Item,{children:(0,a.jsx)(d.default,{value:s,onChange:f,placeholder:"Select an action type",options:[{label:"Link or embed an URL",value:"url"},{label:"Custom HTML",value:"html"}]})}),"html"===s?(0,a.jsx)(o.default.Item,{name:"html",children:(0,a.jsx)(p.ZP,{value:b,placeholder:"HTML embed code (required)",theme:m.FZ,height:"200px",extensions:[(0,v.html)()],onChange:e=>{g(e)}})}):(0,a.jsx)(o.default.Item,{name:"url",children:(0,a.jsx)(u.default,{required:!0,placeholder:"https://myserver.com/action (required)",onChange:e=>x(e.currentTarget.value.trim()),type:"url",pattern:O.ax})}),(0,a.jsx)(o.default.Item,{name:"title",children:(0,a.jsx)(u.default,{value:j,required:!0,placeholder:"Your action title (required)",onChange:e=>w(e.currentTarget.value)})}),(0,a.jsx)(o.default.Item,{name:"description",children:(0,a.jsx)(u.default,{value:_,placeholder:"Optional description",onChange:e=>C(e.currentTarget.value)})}),(0,a.jsx)(o.default.Item,{name:"icon",children:(0,a.jsx)(u.default,{value:E,placeholder:"https://myserver.com/action/icon.png (optional)",onChange:e=>S(e.currentTarget.value)})}),(0,a.jsxs)("div",{children:[(0,a.jsx)(o.default.Item,{name:"color",style:{marginBottom:"0px"},children:(0,a.jsx)(u.default,{type:"color",value:I,onChange:e=>k(e.currentTarget.value)})}),"Optional background color of the action button."]}),"html"===s?null:(0,a.jsx)(o.default.Item,{name:"openExternally",children:(0,a.jsx)(l.default,{checked:N,defaultChecked:N,onChange:e=>{M(e.target.checked)},children:"Open in a new tab instead of within your page."})})]})})},Actions=()=>{let e=(0,y.useContext)(w.a),{serverConfig:t,setFieldInConfigState:n}=e||{},{externalActions:l}=t,[o,u]=(0,y.useState)(null),[c,d]=(0,y.useState)(!1),[f,p]=(0,y.useState)(null),[m,v]=(0,y.useState)(null),[h,x]=(0,y.useState)(-1),resetStates=()=>{p(null),clearTimeout(null)};async function save(e){await (0,g.Si)({apiPath:g.os,data:{value:e},onSuccess:()=>{n({fieldName:"externalActions",value:e,path:""}),p((0,j.kg)(j.zv,"Updated.")),setTimeout(resetStates,g.sI)},onError:e=>{console.log(e),p((0,j.kg)(j.Un,e)),setTimeout(resetStates,g.sI)}})}async function handleDelete(e){let t=[...o];t.splice(e,1);try{u(t),save(t)}catch(e){console.error(e)}}async function handleSave(e,t,n,a,r,l,c,d,i){try{let e=[...o],s={url:n,html:a,title:r,description:l,icon:c,color:d,openExternally:i};t>=0?e[t]=s:e.push(s),u(e),await save(e)}catch(e){console.error(e)}}async function handleEdit(e,t){x(t),v(e),d(!0)}(0,y.useEffect)(()=>{u(l||[])},[l]);let O=[{title:"",key:"delete-edit",render:(e,t,n)=>(0,a.jsxs)(i.default,{size:"middle",children:[(0,a.jsx)(r.default,{onClick:()=>handleDelete(n),icon:(0,a.jsx)(S,{})}),(0,a.jsx)(r.default,{onClick:()=>handleEdit(t,n),icon:(0,a.jsx)(I,{})})]})},{title:"Name",dataIndex:"title",key:"title"},{title:"Description",dataIndex:"description",key:"description"},{title:"URL / Embed",key:"url",dataIndex:"url",render:(e,t)=>t.html?"HTML embed":t.url},{title:"Icon",dataIndex:"icon",key:"icon",render:e=>e?(0,a.jsx)("img",{style:{width:"2vw"},src:e,alt:""}):null},{title:"Color",dataIndex:"color",key:"color",render:e=>e?(0,a.jsx)("div",{style:{backgroundColor:e,height:"30px"},children:e}):null},{title:"Opens",key:"openExternally",dataIndex:"openExternally",render:(e,t)=>!e||t.html?"In the same tab":"In a new tab"}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(C,{children:"External Actions"}),(0,a.jsx)(E,{children:"External action URLs are 3rd party UI you can display, embedded, into your Owncast page when a user clicks on a button to launch your action."}),(0,a.jsxs)(E,{children:["Read more about how to use actions, with examples, at"," ",(0,a.jsx)("a",{href:"https://owncast.online/thirdparty/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"our documentation"}),"."]}),(0,a.jsx)(s.Z,{rowKey:e=>"".concat(e.title,"-").concat(e.url),columns:O,dataSource:o,pagination:!1}),(0,a.jsx)("br",{}),(0,a.jsx)(r.default,{type:"primary",onClick:()=>{v(null),x(-1),d(!0)},children:"Create New Action"}),(0,a.jsx)(b.E,{status:f}),(0,a.jsx)(ActionModal,{action:m,index:h,open:c,onOk:(e,t,n,a,r,l,o,u,c)=>{d(!1),handleSave(e,t,n,a,r,l,o,u,c),v(null),x(-1)},onCancel:()=>{d(!1)}})]})};Actions.getLayout=function(e){return(0,a.jsx)(_.l,{page:e})},t.default=Actions},11163:function(e,t,n){e.exports=n(59974)}},function(e){e.O(0,[5762,5596,1130,4104,9403,1024,3942,971,6697,1664,1749,1700,2122,7752,5891,2891,4749,6627,8966,5056,5578,9774,2888,179],function(){return e(e.s=54005)}),_N_E=e.O()}]);