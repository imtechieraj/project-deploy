(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"1b2a0af7e6516ac88615":function(e,t,r){"use strict";r.r(t),r.d(t,"Dashboard",function(){return Ke});var n=r("8af190b70a6bc55c6f1b"),a=r.n(n),o=(r("8a2d1b95e05b6a321e74"),r("d7dd51e1bf6bfc2c9c3d")),i=r("0d7f0986bcd2f33d8a2a"),c=(r("ab039aecd4a1d4fedc0e"),r("a28fc3c963a1d4d1a2e5")),l=r("ab4cb61bcb2dc161defb"),s=r("adc20f99e57c573c589c"),d=r("d95b0cf107403b178365"),u=r("7edf83707012a871cdfb"),f="DASHBOARD",p="PROFILES_ADD",b="PROFILE_LIST_DELAY",v="PROFILES_LENGTH",m="UPDATE_SETTING";function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){h(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g={profiles:null,profileLength:null},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return Object(u.a)(e,function(){switch(t.type){case p:return _(_({},e),{},{profiles:t.payload});case v:return _(_({},e),{},{profileLength:t.payload});case"RESETDATA":return _(_({},e),{},{profiles:null,profileLength:null})}})},w=function(e){return e.dashboard||g},O=function(){return Object(c.a)(w,function(e){return e})},S=r("d782b72bc5b680c7122c"),N=r("f363639bc5c3c97af546");function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var A=regeneratorRuntime.mark(L),x=regeneratorRuntime.mark(E),F=regeneratorRuntime.mark(T),I=regeneratorRuntime.mark(D);function L(){var e,t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(S.put)({type:p,payload:null});case 2:return r.prev=2,e=["dashboard",{profile:{limit:4,skip:0}}],r.next=6,Object(S.call)(N.i,e,"post");case 6:if(!(t=r.sent).Status){r.next=10;break}return r.next=10,Object(S.all)([Object(S.put)({type:p,payload:t.result.profileList}),Object(S.put)({type:v,payload:t.result.profileLength.profileLength})]);case 10:r.next=14;break;case 12:r.prev=12,r.t0=r.catch(2);case 14:case"end":return r.stop()}},A,null,[[2,12]])}function E(){var e,t,r,n,a,o;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,Object(S.put)({type:p,payload:null});case 3:return i.next=5,Object(S.put)({type:v,payload:null});case 5:return i.next=7,Object(S.delay)(3e3);case 7:return e=["profileList",{limit:4,skip:0}],t=["profileLength"],i.next=11,Object(S.all)([Object(S.call)(N.i,e),Object(S.call)(N.i,t)]);case 11:if(r=i.sent,n=P(r,2),a=n[0],o=n[1],!a.Status||!o.Status){i.next=18;break}return i.next=18,Object(S.all)([Object(S.put)({type:p,payload:a.data}),Object(S.put)({type:v,payload:o.profileLength})]);case 18:i.next=22;break;case 20:i.prev=20,i.t0=i.catch(0);case 22:case"end":return i.stop()}},x,null,[[0,20]])}function T(){var e,t;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=["updateSetting",{instaPopup:!1}],r.next=4,Object(S.call)(N.h,e);case 4:t=r.sent,console.log(t),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:case"end":return r.stop()}},F,null,[[0,8]])}function D(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.takeLatest)(f,L);case 2:return e.next=4,Object(S.takeLatest)(b,E);case 4:return e.next=6,Object(S.takeLatest)(m,T);case 6:case"end":return e.stop()}},I)}var C,R=r("b17009e44878c6145449"),G={monitor:"_2mXaF_po1yYogvVgj1aiCp",statistics_wrap:"_3z18SUuXIHmGX-LdDiLcNe",statistics_box:"_2BZce4Pz4B6AjiTdzUy9bl",sb_wrapper:"_18pGEeLK9oMKWs1rEzHNX-",sb_title:"_10-pCPav2Dt7zuhvf72c4",sb_count:"_2wy1rTX6bsTuvah8R5Nepx"};function H(e,t,r,n){C||(C="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:C,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var U=H("h5",{},void 0,"Profiles"),Y=H("h5",{},void 0,"20"),$=H("h5",{},void 0,"Groups"),M=H("h5",{},void 0,"30"),B=H("h5",{},void 0,"Posts"),X=H("h5",{},void 0,"40"),z=H("h5",{},void 0,"Tags"),J=H("h5",{},void 0,"50");var V,K=Object(n.memo)(function(){return a.a.createElement(a.a.Fragment,null,H("div",{className:G.monitor},void 0,H("div",{className:G.statistics_wrap},void 0,H("div",{className:G.statistics_box},void 0,H("div",{className:G.sb_wrapper},void 0,H("div",{className:G.sb_title},void 0,U),H("div",{className:G.sb_count},void 0,Y))),H("div",{className:G.statistics_box},void 0,H("div",{className:G.sb_wrapper},void 0,H("div",{className:G.sb_title},void 0,$),H("div",{className:G.sb_count},void 0,M))),H("div",{className:G.statistics_box},void 0,H("div",{className:G.sb_wrapper},void 0,H("div",{className:G.sb_title},void 0,B),H("div",{className:G.sb_count},void 0,X))),H("div",{className:G.statistics_box},void 0,H("div",{className:G.sb_wrapper},void 0,H("div",{className:G.sb_title},void 0,z),H("div",{className:G.sb_count},void 0,J))))))}),W=r("ec15def0234cb7c142a8"),Q={social_media_block:"MIxg6IDKulo0cpYrH5V6L","d-inline-block":"_3OAq0UPlCsQ85t6WYRyHPh",profile_list:"_11FiPLVyhwE2BSNOHM6Bxr","background-white":"_1tYeX_po6V0DEXSdHUbOZZ",sub_title:"_22FamyNic4frY52K7JK9yj",media_box:"_22Sj4HpAnc-pqfy6kgUS1t",media_icon:"Y9GrYUm1G9_GYWR4IJO6G",fb:"_1S29mHsy8WNmFrddpDcQRd",insta:"_7uhWs8Nmw2SLgp2pibie5",pin:"_1VJH8mhLkGTz7oEQde8cbh",tw:"UN4QBEE2f1-Elr9D3avxT",li:"gq3ovjv3pEv7afu02wo3K",title:"_2g0HIOBARXJK-Tj5_6wGF-"},Z={fb_social_media_block:"_1Zy6pYaT9FKIE2HVSirXPb",fb_media_box:"_3wZ2hAzkgDwsWNuO6YEL1D",fb_media_icon:"nQcgr-9rHaaorenhNY5U3",insta_profile_modal:"rWCGSAGsyMeO72sxxsIqB",insta_profile_modal_left:"_3NizuLwWOPagVShIQY-pNI",insta_instruction_image:"_2aGTkwRL3B8hXJoatpFlH5",insta_profile_modal_right:"_3ExdRt_gHMmzG_PCPb1MP_","ant-modal-header":"_25Iowy7NU-Riky42CNu1gJ"},q=r("d4644582e3cddb2eda41"),ee=r("5978c4102b9f7ebb49cb"),te=r.n(ee);function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ne(e,t,r,n){V||(V="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:V,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var ae=ne(q.FaFontAwesomeFlag,{}),oe=ne("h5",{},void 0,"Facebook Page"),ie=ne(q.FaUsers,{}),ce=ne("h5",{},void 0,"Facebook Groups"),le=ne(q.FaFontAwesomeFlag,{}),se=ne("h5",{},void 0,"Linkedin Page"),de=ne(q.FaUsers,{}),ue=ne("h5",{},void 0,"Linkedin Profile"),fe=ne("h4",{},void 0,"Steps to Change as Instagram Professional Account"),pe=ne("h6",{},void 0,"(You can\u2019t schedule the posts in personal accounts,So you need to convert it to either creator or business account)"),be=ne("ol",{},void 0,ne("li",{},void 0,"Go to your profile."),ne("li",{},void 0,"Tap \u2630 in the top right corner."),ne("li",{},void 0,"Tap Settings -> Account."),ne("li",{},void 0,"Tap Switch to Professional Account at the bottom."),ne("li",{},void 0,"Choose the best category which suits your business and tap 'Done'.")),ve=ne("p",{},void 0,"Add your Instagram Profile"),me=ne(q.FaInstagram,{}),ye=ne("h5",{},void 0,"Instagram"),_e=ne("img",{src:te.a}),he=ne("br",{}),ge=ne("br",{});var ke,we=Object(n.memo)(function(e){var t=e.isModalVisible,r=e.handleCancel,n=e.type,o=e.profileAdd,i=e.setInstaPopup,c=e.instaPopup,l=function(e){return"Facebook"===e?"Add Your Facebook pages/Groups":"Linkedin"===e?"Add Your LinkedIn pages and user-profiles":"Instagram"===e?"Add Your Instagram business profiles":void 0}(n);return ne("div",{},void 0,ne(W.Modal,{className:"social_modal_header",title:l,visible:t,okButtonProps:{style:{display:"none"}},onCancel:r},void 0,ne(function(e){var t=e.type,r=e.profileAdd;if("Facebook"===t)return ne("div",{className:Z.fb_social_media_block+" facebook_Profile_Modal"},void 0,ne("div",{className:"".concat(Z.fb_media_box)},void 0,ne("a",{onClick:function(){return r("FacebookPage")}},void 0,ne("div",{className:"".concat(Z.fb_media_icon)},void 0,ae),ne("div",{className:Z.fb_title},void 0,oe))),ne("div",{className:"".concat(Z.fb_media_box)},void 0,ne("a",{onClick:function(){return r("FacebookGroup")}},void 0,ne("div",{className:"".concat(Z.fb_media_icon)},void 0,ie),ne("div",{className:Z.title},void 0,ce))));if("Linkedin"===t)return ne("div",{className:Z.fb_social_media_block+" linkedin_Profile_Modal"},void 0,ne("div",{className:"".concat(Z.fb_media_box)},void 0,ne("a",{onClick:function(){return r("LinkedinPage")}},void 0,ne("div",{className:"".concat(Z.fb_media_icon)},void 0,le),ne("div",{className:Z.fb_title},void 0,se))),ne("div",{className:"".concat(Z.fb_media_box)},void 0,ne("a",{onClick:function(){return r("LinkedinUser")}},void 0,ne("div",{className:"".concat(Z.fb_media_icon)},void 0,de),ne("div",{className:Z.title},void 0,ue))));if("Instagram"===t){var n=function(e){return a.a.createElement(W.Alert,re({type:"success"},e))};return a.a.createElement(a.a.Fragment,null,fe,pe,ne("div",{className:Z.insta_profile_modal},void 0,ne("div",{className:Z.insta_profile_modal_left},void 0,ne("div",{className:Z.insta_instruction_image},void 0,be,ve),ne("div",{className:Z.fb_social_media_block},void 0,ne("div",{className:"".concat(Z.fb_media_box)},void 0,ne("a",{onClick:function(){return r("Instagram")}},void 0,ne("div",{className:"".concat(Z.fb_media_icon)},void 0,me),ne("div",{className:Z.fb_title},void 0,ye))))),ne("div",{className:Z.insta_profile_modal_right},void 0,_e,he,ge,ne(W.Checkbox,{onChange:function(e){return i(e.target.checked)},checked:c},void 0,ne(n,c?{message:"Thank you for your confirmation. Popup will not shows again"}:{message:"I Understand this instruction don't show this again"})))))}},{type:n,profileAdd:o})))});function Oe(e,t,r,n){ke||(ke="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:ke,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var Se,Ne=[{id:"001",label:"Facebook",key:"1"},{id:"002",label:"Instagram",key:"2"},{id:"003",label:"Pinterest",key:"3"},{id:"004",label:"Twitter",key:"4"},{id:"005",label:"Linkedin",key:"5"}],Pe=Oe(q.FaFacebookF,{}),je=Oe(q.FaInstagram,{}),Ae=Oe(q.FaTwitter,{}),xe=Oe(q.FaLinkedinIn,{}),Fe=Oe(q.FaPinterestP,{}),Ie=function(e){switch(e){case"Facebook":return Pe;case"Instagram":return je;case"Twitter":return Ae;case"Linkedin":return xe;case"Pinterest":return Fe;default:return""}},Le=function(e){switch(e){case"Facebook":return Q.fb;case"Instagram":return Q.insta;case"Twitter":return Q.tw;case"Linkedin":return Q.li;case"Pinterest":return Q.pin;default:return""}},Ee=function(e){switch(e){case"Instagram":return["facebook-insta","instagram","facebook"];case"FacebookPage":return["facebook-pages","fb_page","facebook"];case"FacebookGroup":return["facebook-groups","fb_group","facebook"];case"Twitter":return["twitter","twitter","twitter"];case"LinkedinUser":return["linkedin-user","linkedIn_user","linkedin"];case"LinkedinPage":return["linkedin-pages","linkedIn_pages","linkedin"];case"Pinterest":return["pinterest","pinterest","pinterest"]}};function Te(e,t,r,n){Se||(Se="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:Se,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}function De(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,a,o=[],i=!0,c=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{i||null==r.return||r.return()}finally{if(c)throw a}}return o}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return Ce(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Ce(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var Re=Te("h3",{},void 0,"Add your Awesome Profile");var Ge,He=Object(n.memo)(function(e){var t=e.profilelistDelay,r=e.updateSetting,o=De(Object(n.useState)(!1),2),i=o[0],c=o[1],l=De(Object(n.useState)(null),2),s=l[0],d=l[1],u=De(Object(n.useState)(!1),2),f=u[0],p=u[1],b=function(){c(!0)},v=function(){c(!1),d(null),f&&(localStorage.setItem("instaPopup",!1),r())},m=function(e){Object(N.k)(Ee(e),function(e){if(e)return console.log(e);v(),t()})};Object(n.useEffect)(function(){if(s)return"Twitter"===s||"Pinterest"===s?m(s):"Instagram"===s?JSON.parse(localStorage.getItem("instaPopup"))?b():m(s):b()},[s]);var y={isModalVisible:i,type:s,instaPopup:f,setInstaPopup:p,profileAdd:m,handleCancel:v};return Te("div",{className:"background-white icon-link d-inline-block"},void 0,Te("div",{className:Q.sub_title},void 0,Re),Te("div",{className:Q.social_media_block},void 0,Ne.map(function(e){var t={onClick:function(){return d(e.label)},key:e.id,className:"".concat(Q.media_box," ").concat(Le(e.label))};return a.a.createElement("a",t,Te("div",{className:"".concat(Q.media_icon)},void 0,Ie(e.label)))})),i?a.a.createElement(we,y):null)});function Ue(e,t,r,n){Ge||(Ge="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:Ge,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var Ye=Ue(W.Col,{span:12},void 0,Ue(K,{}),Ue("div",{className:"postButton"},void 0,Ue("a",{href:"#"},void 0,"Create a post"))),$e=function(e){var t=e.profiles,r=e.profilelistDelay,n=e.profileTypeFilter,o=e.updateSetting,i={profiles:t,profileTypeFilter:n,bottomBtnText:"view All",type:"dashboard"};return a.a.createElement(a.a.Fragment,null,Ue(W.Row,{},void 0,Ue(W.Col,{span:12},void 0,Ue(He,{profilelistDelay:r,updateSetting:o}),a.a.createElement(R.a,i)),Ye))};var Me,Be=function(){return{type:b}},Xe=function(){return{type:m}},ze=function(){return{type:"RESETDATA"}};function Je(e,t,r,n){Me||(Me="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,o=arguments.length-3;if(t||0===o||(t={children:void 0}),1===o)t.children=n;else if(o>1){for(var i=new Array(o),c=0;c<o;c++)i[c]=arguments[c+3];t.children=i}if(t&&a)for(var l in a)void 0===t[l]&&(t[l]=a[l]);else t||(t=a||{});return{$$typeof:Me,type:e,key:void 0===r?null:""+r,ref:null,props:t,_owner:null}}var Ve=Je(i.Helmet,{},void 0,Je("title",{},void 0,"Dashboard"),Je("meta",{name:"description",content:"Description of Dashboard"}));function Ke(e){var t=e.dashboardApi,r=e.dashboard,o=e.profilelistDelay,i=e.updateSetting,c=r.profiles;Object(d.a)({key:"dashboard",reducer:k}),Object(s.a)({key:"dashboard",saga:D}),Object(n.useEffect)(function(){t()},[]);var l={profiles:c,profilelistDelay:o,profileTypeFilter:function(e){console.log(e)},updateSetting:i};return Je("div",{},void 0,Ve,a.a.createElement($e,l))}var We=Object(c.b)({dashboard:O()});var Qe=Object(o.connect)(We,function(e){return{dashboardApi:function(){return e({type:f})},profilelistDelay:function(){return e(Be())},updateSetting:function(){return e(Xe())},clearState:function(){return ze()}}});t.default=Object(l.compose)(Qe)(Ke)},"5978c4102b9f7ebb49cb":function(e,t,r){e.exports=r.p+"2ecd30f5e6a4c25e698584098bf4dbd6.gif"}}]);