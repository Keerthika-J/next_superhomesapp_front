(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[814],{1222:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return f},ACTION_FAST_REFRESH:function(){return c},ACTION_SERVER_ACTION:function(){return i}});var n,r,o="refresh",u="navigate",l="restore",a="server-patch",f="prefetch",c="fast-refresh",i="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5218:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(3785),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2888:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(567),o=n(7702),u=n(1309);n(8421),Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return C}});var l=n(8754)._(n(7294)),a=n(2862),f=n(2968),c=n(2902),i=n(7321),s=n(299),d=n(2250),p=n(6451),v=n(9897),h=n(5218),b=n(3475),y=n(1222),_=new Set;function g(e,t,n,r,o,u){if(u||(0,f.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){var l=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(_.has(l))return;_.add(l)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(function(e){})}}function O(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}var C=l.default.forwardRef(function(e,t){var n,c,_=e.href,C=e.as,E=e.children,m=e.prefetch,M=void 0===m?null:m,P=e.passHref,j=e.replace,T=e.shallow,R=e.scroll,k=e.locale,A=e.onClick,I=e.onMouseEnter,L=e.onTouchStart,N=e.legacyBehavior,S=void 0!==N&&N,x=o._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=E,S&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));var w=l.default.useContext(d.RouterContext),U=l.default.useContext(p.AppRouterContext),H=null!=w?w:U,K=!w,F=!1!==M,D=null===M?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,B=l.default.useMemo(function(){if(!w){var e=O(_);return{href:e,as:C?O(C):e}}var t=u._((0,a.resolveHref)(w,_,!0),2),n=t[0],r=t[1];return{href:n,as:C?(0,a.resolveHref)(w,C):r||n}},[w,_,C]),V=B.href,q=B.as,z=l.default.useRef(V),G=l.default.useRef(q);S&&(c=l.default.Children.only(n));var Y=S?c&&"object"==typeof c&&c.ref:t,J=u._((0,v.useIntersection)({rootMargin:"200px"}),3),Q=J[0],W=J[1],X=J[2],Z=l.default.useCallback(function(e){(G.current!==q||z.current!==V)&&(X(),G.current=q,z.current=V),Q(e),Y&&("function"==typeof Y?Y(e):"object"==typeof Y&&(Y.current=e))},[q,Y,V,X,Q]);l.default.useEffect(function(){H&&W&&F&&g(H,V,q,{locale:k},{kind:D},K)},[q,V,W,k,F,null==w?void 0:w.locale,H,K,D]);var $={ref:Z,onClick:function(e){S||"function"!=typeof A||A(e),S&&c.props&&"function"==typeof c.props.onClick&&c.props.onClick(e),H&&!e.defaultPrevented&&function(e,t,n,r,o,u,a,c,i,s){if(!("A"===e.currentTarget.nodeName.toUpperCase()&&((d=e.currentTarget.getAttribute("target"))&&"_self"!==d||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which||!i&&!(0,f.isLocalURL)(n)))){e.preventDefault();var d,p=function(){var e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:u,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};i?l.default.startTransition(p):p()}}(e,H,V,q,j,T,R,k,K,F)},onMouseEnter:function(e){S||"function"!=typeof I||I(e),S&&c.props&&"function"==typeof c.props.onMouseEnter&&c.props.onMouseEnter(e),H&&(F||!K)&&g(H,V,q,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:D},K)},onTouchStart:function(e){S||"function"!=typeof L||L(e),S&&c.props&&"function"==typeof c.props.onTouchStart&&c.props.onTouchStart(e),H&&(F||!K)&&g(H,V,q,{locale:k,priority:!0,bypassPrefetchedCheck:!0},{kind:D},K)}};if((0,i.isAbsoluteUrl)(q))$.href=q;else if(!S||P||"a"===c.type&&!("href"in c.props)){var ee=void 0!==k?k:null==w?void 0:w.locale,et=(null==w?void 0:w.isLocaleDomain)&&(0,h.getDomainLocale)(q,ee,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);$.href=et||(0,b.addBasePath)((0,s.addLocale)(q,ee,null==w?void 0:w.defaultLocale))}return S?l.default.cloneElement(c,$):l.default.createElement("a",r._({},x,$),n)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9897:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1309);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return c}});var o=n(7294),u=n(4482),l="function"==typeof IntersectionObserver,a=new Map,f=[];function c(e){var t=e.rootRef,n=e.rootMargin,c=e.disabled||!l,i=r._((0,o.useState)(!1),2),s=i[0],d=i[1],p=(0,o.useRef)(null),v=(0,o.useCallback)(function(e){p.current=e},[]);return(0,o.useEffect)(function(){if(l){if(!c&&!s){var e,r,o,i,v=p.current;if(v&&v.tagName)return r=(e=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=f.find(function(e){return e.root===n.root&&e.margin===n.margin});if(r&&(t=a.get(r)))return t;var o=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},f.push(n),a.set(n,t),t}({root:null==t?void 0:t.current,rootMargin:n})).id,o=e.observer,(i=e.elements).set(v,function(e){return e&&d(e)}),o.observe(v),function(){if(i.delete(v),o.unobserve(v),0===i.size){o.disconnect(),a.delete(r);var e=f.findIndex(function(e){return e.root===r.root&&e.margin===r.margin});e>-1&&f.splice(e,1)}}}}else if(!s){var h=(0,u.requestIdleCallback)(function(){return d(!0)});return function(){return(0,u.cancelIdleCallback)(h)}}},[c,n,t,s,p.current]),[v,s,(0,o.useCallback)(function(){d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(3902)},1664:function(e,t,n){e.exports=n(2888)},1163:function(e,t,n){e.exports=n(1247)}}]);