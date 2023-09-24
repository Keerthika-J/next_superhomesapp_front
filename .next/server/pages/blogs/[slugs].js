"use strict";
(() => {
var exports = {};
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 3529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Fblogs_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblogs_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fblogs_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblogs_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Fblogs_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblogs_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/blogs/[slugs].js
var _slugs_namespaceObject = {};
__webpack_require__.r(_slugs_namespaceObject);
__webpack_require__.d(_slugs_namespaceObject, {
  "default": () => (Blog),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(5244);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./pages/_document.js
var _document = __webpack_require__(2638);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(5225);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "react-share"
const external_react_share_namespaceObject = require("react-share");
// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__(4743);
// EXTERNAL MODULE: ./src/components/Drawers.js
var Drawers = __webpack_require__(3193);
// EXTERNAL MODULE: ./src/components/FixedMenu/FixedMenu.js
var FixedMenu = __webpack_require__(711);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/blogs/[slugs].js







function Blog({ data }) {
    const router = (0,router_.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: "Loading..."
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        children: [
                            data.blogTitle,
                            " | SuperHomes"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: `https://www.superhomes.co/admin/public/api/blogs/${data.slugs}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: "https://www.superhomes.co/admin/public/" + data.featureImg
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "outer-div div-section-container relative bg-white",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Drawers/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(FixedMenu/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "mx-auto w-full md:w-3/4 pt-32",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "my-2 block text-[30px] w-full mx-auto py-2",
                                children: data.blogTitle
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("img", {
                                src: "https://www.superhomes.co/admin/public/" + data.featureImg,
                                className: "my-4 w-full"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "my-2 block w-full mx-auto py-2",
                                dangerouslySetInnerHTML: {
                                    __html: data.blogDesc
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full border-b border-black pt-6 pb-4"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "my-8 flex justify-between",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "share_svg",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx(external_react_share_namespaceObject.FacebookShareButton, {
                                            url: `https://www.superhomes.co/admin/public/api/blogs/${data.slugs}`,
                                            children: /*#__PURE__*/ jsx_runtime.jsx(external_react_share_namespaceObject.FacebookIcon, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(external_react_share_namespaceObject.TwitterShareButton, {
                                            url: `https://www.superhomes.co/admin/public/api/blogs/${data.slugs}`,
                                            children: /*#__PURE__*/ jsx_runtime.jsx(external_react_share_namespaceObject.TwitterIcon, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx(external_react_share_namespaceObject.LinkedinShareButton, {
                                            url: `https://www.superhomes.co/admin/public/api/blogs/${data.slugs}`,
                                            children: /*#__PURE__*/ jsx_runtime.jsx(external_react_share_namespaceObject.LinkedinIcon, {})
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer/* default */.Z, {})
        ]
    });
}
// export async function getServerSideProps({ params }) {
//     const slugs = params.slugs;
//     const data = await fetch(`https://www.superhomes.co/admin/public/api/blogs/${slugs}`).then(res => res.json());
//     return {
//         props: {
//             slugs,
//             data
//         }
//     }
// }
async function getStaticPaths() {
    const res = await fetch("https://www.superhomes.co/admin/public/api/blogs");
    const data = await res.json();
    const paths = data.blogs.map((blog)=>({
            params: {
                slugs: blog.slugs
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params }) {
    const res = await fetch(`https://www.superhomes.co/admin/public/api/blogs/${params.slugs}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Fblogs%2F%5Bslugs%5D&preferredRegion=&absolutePagePath=private-next-pages%2Fblogs%2F%5Bslugs%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Fblogs_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblogs_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slugs_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Fblogs_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblogs_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Fblogs_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Fblogs_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "getStaticPaths");
const getServerSideProps = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "getServerSideProps");
const config = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "config");
const reportWebVitals = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "unstable_getStaticParams");
const unstable_getServerProps = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "unstable_getServerProps");
const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES,
        page: "/blogs/[slugs]",
        pathname: "/blogs/[slugs]",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: _app["default"],
        Document: _document["default"]
    },
    userland: _slugs_namespaceObject
});

//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [769,664,115,986,193], () => (__webpack_exec__(3529)));
module.exports = __webpack_exports__;

})();