/*! For license information please see component---src-templates-about-page-template-js-5125d84828751dedd1c9.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{CN8t:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("hlFM"),l=a("ofer"),o=a("H2TA"),c=a("X4R9");var m=function(e){var t=e.company;return n.a.createElement(n.a.Fragment,null,"Copyright © ",(new Date).getFullYear()," ",n.a.createElement(c.b,{color:"inherit",to:"/"},t)," ")},u=a("PsDL"),d=a("hlie"),s=a("RwSH"),b=a.n(s);var f=function(e){var t=e.url;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{color:"inherit","aria-label":"github",component:d.a,href:t,target:"_blank",rel:"noopener noreferrer",disableTouchRipple:!0},n.a.createElement(b.a,{fontSize:"inherit"})))},p=a("y9eO"),h=a.n(p);var g=function(e){var t="mailto:"+e.email;return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{sixe:"small",color:"inherit","aria-label":"github",component:d.a,href:t,target:"_blank",rel:"noopener noreferrer",disableTouchRipple:!0},n.a.createElement(h.a,{fontSize:"inherit"})))},v=a("IAH9");t.a=Object(o.a)((function(e){return{root:{color:e.palette.common.white,backgroundColor:e.palette.primary.main,marginTop:e.spacing(8),padding:e.spacing(6,2)}}}))((function(e){var t=e.classes,a=Object(v.a)(),r=a.siteUrl,o=a.company,c=a.gitHubUrl,u=a.contact,d=u.name,s=u.email;return n.a.createElement(i.a,{className:t.root},n.a.createElement(l.a,{variant:"subtitle2",gutterBottom:!0},d),n.a.createElement(l.a,{variant:"body2"},n.a.createElement(f,{url:c}),n.a.createElement(g,{email:s})),n.a.createElement(l.a,{variant:"subtitle2",align:"right"},n.a.createElement(m,{company:o,siteUrl:r,email:s})))}))},Ie8z:function(e,t,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),l=a("iuhU"),o=a("H2TA"),c=["video","audio","picture","iframe","img"],m=i.forwardRef((function(e,t){var a=e.children,o=e.classes,m=e.className,u=e.component,d=void 0===u?"div":u,s=e.image,b=e.src,f=e.style,p=Object(n.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==c.indexOf(d),g=!h&&s?Object(r.a)({backgroundImage:'url("'.concat(s,'")')},f):f;return i.createElement(d,Object(r.a)({className:Object(l.default)(o.root,m,h&&o.media,-1!=="picture img".indexOf(d)&&o.img),ref:t,style:g,src:h?s||b:void 0},p),a)}));t.a=Object(o.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(m)},RwSH:function(e,t,a){"use strict";var r=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("q1tI")),l=(0,r(a("8/g6")).default)(i.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");t.default=l},VxdY:function(e,t,a){},gxI0:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=(a("VxdY"),a("Ji2X")),l=a("lO0E"),o=a("hlFM"),c=a("kKAo"),m=a("ofer"),u=a("Ie8z"),d=a("wb2y"),s=a("XX3T"),b=a("Cekx"),f=a.n(b),p=a("H2TA"),h=a("aDnJ"),g=a("FCJB"),v=a("CN8t");t.default=Object(p.a)((function(e){return{cardMedia:{height:"450px"},date:{paddingTop:e.spacing(2),fontSize:14},author:{fontSize:14}}}))((function(e){var t=e.classes,a=e.data,r=e.location,b=e.navigate,p=a.markdownRemark,E=p.html,y=p.excerpt,w=p.frontmatter,O=w.title,k=w.date,x=w.publishedBy,j=w.image.publicURL;return n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{title:O,description:y,location:r,navigate:b}),n.a.createElement(l.a,{id:"back-to-top-anchor"}),n.a.createElement(o.a,{clone:!0,pt:8,pb:2},n.a.createElement(i.a,{maxWidth:"md"},n.a.createElement(c.a,{elevation:1},n.a.createElement(u.a,{className:t.cardMedia,image:j}),n.a.createElement(o.a,{pt:2,pr:2,pb:2,pl:2},n.a.createElement("div",{dangerouslySetInnerHTML:{__html:E}}),n.a.createElement(o.a,{pt:1,pb:1},n.a.createElement(d.a,{variant:"fullWidth"})),n.a.createElement(m.a,{variant:"subtitle2",color:"textSecondary"},"Published: ",k),n.a.createElement(m.a,{variant:"subtitle2",color:"textSecondary"},"PublishedBy: ",x))))),n.a.createElement(g.a,null,n.a.createElement(s.a,{color:"secondary","aria-label":"scroll back to top"},n.a.createElement(f.a,null))),n.a.createElement(v.a,null))}))},wb2y:function(e,t,a){"use strict";var r=a("wx14"),n=a("Ff2n"),i=a("q1tI"),l=a("iuhU"),o=a("H2TA"),c=a("ye/S"),m=i.forwardRef((function(e,t){var a=e.absolute,o=void 0!==a&&a,c=e.classes,m=e.className,u=e.component,d=void 0===u?"hr":u,s=e.flexItem,b=void 0!==s&&s,f=e.light,p=void 0!==f&&f,h=e.orientation,g=void 0===h?"horizontal":h,v=e.role,E=void 0===v?"hr"!==d?"separator":void 0:v,y=e.variant,w=void 0===y?"fullWidth":y,O=Object(n.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(d,Object(r.a)({className:Object(l.default)(c.root,m,"fullWidth"!==w&&c[w],o&&c.absolute,b&&c.flexItem,p&&c.light,"vertical"===g&&c.vertical),role:E,ref:t},O))}));t.a=Object(o.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(c.b)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(m)},y9eO:function(e,t,a){"use strict";var r=a("TqRt"),n=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("q1tI")),l=(0,r(a("8/g6")).default)(i.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.default=l}}]);
//# sourceMappingURL=component---src-templates-about-page-template-js-5125d84828751dedd1c9.js.map