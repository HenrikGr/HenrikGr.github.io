/*! For license information please see component---src-templates-articles-tags-template-js-ae517f34a76594607cd8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{WDYs:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),r=t.n(n),c=t("hlFM"),l=t("aDnJ"),o=t("rP3T"),i=t("lO0E"),s=t("FCJB"),d=t("XX3T"),m=t("Cekx"),p=t.n(m),u=t("OMrn"),b=t("wb2y"),f=t("IAH9"),v=t("CN8t");a.default=function(e){var a=e.pageContext,t=e.data,n=e.location,m=e.navigate,h=Object(f.a)(),g=a.tag,y=t.allMarkdownRemark.edges;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Articles about "+g,description:"Articles about "+g,location:n,navigate:m,siteMeta:h}),r.a.createElement(i.a,{id:"back-to-top-anchor"}),r.a.createElement(c.a,{pt:8,pr:1,pb:2,pl:1},r.a.createElement(u.a,null),r.a.createElement(c.a,{pt:1,pb:1},r.a.createElement(b.a,{variant:"fullWidth"})),r.a.createElement(o.a,{edges:y,location:n})),r.a.createElement(v.a,{siteMeta:h}),r.a.createElement(s.a,null,r.a.createElement(d.a,{color:"secondary","aria-label":"scroll back to top"},r.a.createElement(p.a,null))))}},rP3T:function(e,a,t){"use strict";t.d(a,"a",(function(){return T}));var n=t("q1tI"),r=t.n(n),c=t("Ji2X"),l=t("hlFM"),o=t("Z3vd"),i=t("30+C"),s=t("wx14"),d=t("Ff2n"),m=t("iuhU"),p=t("H2TA"),u=t("ofer"),b=n.forwardRef((function(e,a){var t=e.action,r=e.avatar,c=e.classes,l=e.className,o=e.component,i=void 0===o?"div":o,p=e.disableTypography,b=void 0!==p&&p,f=e.subheader,v=e.subheaderTypographyProps,h=e.title,g=e.titleTypographyProps,y=Object(d.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),E=h;null==E||E.type===u.a||b||(E=n.createElement(u.a,Object(s.a)({variant:r?"body2":"h5",className:c.title,component:"span",display:"block"},g),E));var x=f;return null==x||x.type===u.a||b||(x=n.createElement(u.a,Object(s.a)({variant:r?"body2":"body1",className:c.subheader,color:"textSecondary",component:"span",display:"block"},v),x)),n.createElement(i,Object(s.a)({className:Object(m.default)(c.root,l),ref:a},y),r&&n.createElement("div",{className:c.avatar},r),n.createElement("div",{className:c.content},E,x),t&&n.createElement("div",{className:c.action},t))})),f=Object(p.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(b),v=n.forwardRef((function(e,a){var t=e.disableSpacing,r=void 0!==t&&t,c=e.classes,l=e.className,o=Object(d.a)(e,["disableSpacing","classes","className"]);return n.createElement("div",Object(s.a)({className:Object(m.default)(c.root,l,!r&&c.spacing),ref:a},o))})),h=Object(p.a)({root:{display:"flex",alignItems:"center",padding:8},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiCardActions"})(v),g=t("oa/T"),y=t("lFIR"),E=t("X4R9");function x(e){void 0===e&&(e=10);for(var a=[],t=1;t<=e;t++){var n=t/e;a.push(n)}return a.push(0),a}var O=Object(p.a)({card:{height:"100%"},actions:{justifyContent:"space-between"},cardMedia:{height:"150px"},titleText:{textAlign:"center"}})((function(e){var a=e.classes,t=e.title,c=e.subtitle,s=e.excerpt,d=e.publishedDate,m=e.timeToRead,p=e.path,b=e.referrer,v=Object(n.useRef)(null),O=Object(n.useState)({}),T=O[0],j=O[1];function N(e){e.forEach((function(e){e.isIntersecting&&j(e)}))}return Object(n.useEffect)((function(){var e=new IntersectionObserver(N,{root:null,rootMargin:"0px",threshold:x()});return v.current&&e.observe(v.current),function(){return e.disconnect()}}),[v]),r.a.createElement(y.a,{ref:v,component:E.b,state:{referrer:b},to:p,style:{opacity:T&&T.intersectionRatio,marginBottom:"8px"}},r.a.createElement(i.a,{raised:T&&1===T.intersectionRatio,className:a.card},r.a.createElement(f,{disableTypography:!0,title:r.a.createElement(u.a,{variant:"h6",color:"textPrimary"},t),subheader:r.a.createElement(u.a,{variant:"body2",color:"textSecondary"},c)}),r.a.createElement(g.a,null,r.a.createElement(u.a,{variant:"body2"},s)),r.a.createElement(h,{disableSpacing:!0,className:a.actions},r.a.createElement(l.a,{component:"div"},r.a.createElement(u.a,{component:"div",variant:"caption"},"Date: "+d),r.a.createElement(u.a,{component:"div",variant:"caption"},"Time to read: "+m+" min")),r.a.createElement(l.a,{component:"div"},r.a.createElement(o.a,{size:"small",color:"secondary"},"Read more ...")))))}));function T(e){var a=e.edges,t=e.location;return r.a.createElement(c.a,{maxWidth:"md",disableGutters:!1},a.map((function(e){var a=e.node,n=a.excerpt,c=a.timeToRead,l=a.fields.slug,o=a.frontmatter,i=o.title,s=o.subtitle,d=o.date,m=o.publishedBy;return r.a.createElement(O,{key:l,title:i,subtitle:s,excerpt:n,publishedDate:d,publishedBy:m,timeToRead:c,path:l,referrer:t.pathname})})))}}}]);
//# sourceMappingURL=component---src-templates-articles-tags-template-js-ae517f34a76594607cd8.js.map