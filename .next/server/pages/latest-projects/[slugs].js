"use strict";
(() => {
var exports = {};
exports.id = 743;
exports.ids = [743];
exports.modules = {

/***/ 7906:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_page_2Flatest_projects_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Flatest_projects_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderkind_PAGES_page_2Flatest_projects_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Flatest_projects_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderkind_PAGES_page_2Flatest_projects_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Flatest_projects_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/latest-projects/[slugs].js
var _slugs_namespaceObject = {};
__webpack_require__.r(_slugs_namespaceObject);
__webpack_require__.d(_slugs_namespaceObject, {
  "default": () => (LatestProjects),
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
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
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
;// CONCATENATED MODULE: ./pages/latest-projects/[slugs].js







function LatestProjects({ slugs, data }) {
    const router = (0,router_.useRouter)();
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: "Loading..."
        });
    }
    const temp = typeof data.galleryImgs === "string" ? data.galleryImgs.split(",") : "";
    const itemRows = [];
    for (let item of temp){
        const row = /*#__PURE__*/ jsx_runtime.jsx("img", {
            className: "masonary-grid-img drop-shadow-md",
            src: "https://www.superhomes.co/admin/public/" + item
        });
        itemRows.push(row);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("title", {
                        children: [
                            data.seoTitle,
                            " | SuperHomes"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: data.metaDesc
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "canonical",
                        href: `https://www.superhomes.co/admin/public/api/latest-projects/${data.slugs}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:title",
                        content: data.seoTitle
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:description",
                        content: data.metaDesc
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        property: "og:image",
                        content: "https://www.superhomes.co/admin/public/" + data.featureImgs
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "outer-div div-section-container relative bg-white",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(Drawers/* default */.Z, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(FixedMenu/* default */.Z, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "w-full mt-16 md:mt-20",
                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "block text-[25px] md:text-[35px] xl:text-[54.2px]",
                                    children: data.portfolioTitle
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 justify-items-end gap-x-12 gap-y-8 mt-8",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-span-1 w-full h-full",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: "https://www.superhomes.co/admin/public/" + data.featureImgs,
                                            className: "w-full h-full max-h-[600px] drop-shadow-md object-fill rounded-xl"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-span-1 w-full",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-title text-[13.8px] md:text-[27.12px]",
                                                        children: "Location"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-para text-[10px] md:text-[15.52px]",
                                                        children: data.location
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-title text-[13.8px] md:text-[27.12px]",
                                                        children: "Client"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                        className: "projects-para text-[10px] md:text-[15.52px]",
                                                        children: [
                                                            data.client,
                                                            "."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-title text-[13.8px] md:text-[27.12px]",
                                                        children: "Plot Size"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-para text-[10px] md:text-[15.52px]",
                                                        children: data.plotSize
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-title text-[13.8px] md:text-[27.12px]",
                                                        children: "Completion Time"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-para text-[10px] md:text-[15.52px]",
                                                        children: data.completionTime
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-title text-[13.8px] md:text-[27.12px]",
                                                        children: "Package"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-para text-[10px] md:text-[15.52px]",
                                                        children: data.package
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-title text-[13.8px] md:text-[27.12px]",
                                                        children: "Built up Area"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "projects-para text-[10px] md:text-[15.52px]",
                                                        children: data.builtUpArea
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-span-full masonary-grid mt-8",
                                children: itemRows
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
//     const data = await fetch(`https://www.superhomes.co/admin/public/api/latest-projects/${slugs}`).then(res => res.json());
//     return {
//         props: {
//             slugs,
//             data
//         }
//     }
// }
async function getStaticPaths() {
    const res = await fetch("https://www.superhomes.co/admin/public/api/latest-projects");
    const data = await res.json();
    const paths = data.porfolios.map((portfolio)=>({
            params: {
                slugs: portfolio.slugs
            }
        }));
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params }) {
    const res = await fetch(`https://www.superhomes.co/admin/public/api/latest-projects/${params.slugs}`);
    const data = await res.json();
    return {
        props: {
            data
        }
    };
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES&page=%2Flatest-projects%2F%5Bslugs%5D&preferredRegion=&absolutePagePath=private-next-pages%2Flatest-projects%2F%5Bslugs%5D.js&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=private-next-pages%2F_document.js&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = pages_module.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_page_2Flatest_projects_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Flatest_projects_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slugs_namespaceObject, "default"));
// Re-export methods.
const next_route_loaderkind_PAGES_page_2Flatest_projects_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Flatest_projects_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "getStaticProps");
const next_route_loaderkind_PAGES_page_2Flatest_projects_2F_5Bslugs_5D_preferredRegion_absolutePagePath_private_next_pages_2Flatest_projects_2F_5Bslugs_5D_js_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_private_next_pages_2F_document_js_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_slugs_namespaceObject, "getStaticPaths");
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
        page: "/latest-projects/[slugs]",
        pathname: "/latest-projects/[slugs]",
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
var __webpack_exports__ = __webpack_require__.X(0, [769,664,115,986,193], () => (__webpack_exec__(7906)));
module.exports = __webpack_exports__;

})();