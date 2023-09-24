"use strict";
exports.id = 775;
exports.ids = [775];
exports.modules = {

/***/ 3775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


// import 'reactjs-popup/dist/index.css';


function BookConsultation(props) {
    const [fname, setFname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lname, setLname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [service, setService] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Construction");
    const currentPathName = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "12px"
        }
    };
    function onModalClose() {
        props.onCloseModal();
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        var formData = {
            firstName: fname,
            lastName: lname,
            email: email,
            mobile: phone,
            location: "Chennai",
            service: service,
            source: currentPathName === "/" ? "Home" : currentPathName.pathname,
            messages: null
        };
        fetch("https://www.superhomes.co/admin/public/api/sendmail", {
            method: "post",
            body: JSON.stringify(formData),
            mode: "no-cors",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            console.log(response);
            fetch("https://www.superhomes.co/admin/public/api/update-gallabox", {
                method: "post",
                body: JSON.stringify(formData)
            }).then((response)=>{
                console.log(response);
                alert("Thank you for submitting! We will get back to you soon.");
                window.location.reload(false);
            }).catch((error)=>{
                console.log(error);
            });
        }).catch((error)=>{
            console.log(error);
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_2___default()), {
        isOpen: props.IsModalOpened,
        style: customStyles,
        ariaHideApp: false,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-full bg-white block",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "block float-right",
                    onClick: (e)=>onModalClose(),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: "w-8 h-8 cursor-pointer invert block",
                        src: "/images/close-icon.png",
                        alt: "close"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "we-build-section grid grid-cols-2 gap-x-2.5",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "my-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block my-2",
                                        children: "First Name *:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "firstName",
                                        className: "firstName border-b-2 border-black w-full py-2.5 hover:border-b-[3px]",
                                        required: true,
                                        onChange: (e)=>setFname(e.target.value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "my-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block my-2",
                                        children: "Last Name *:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        id: "lastName",
                                        className: "lastName border-b-2 border-black w-full py-2.5 hover:border-b-[3px]",
                                        required: true,
                                        onChange: (e)=>setLname(e.target.value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-2 my-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block my-2",
                                        children: "Email*:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "email",
                                        id: "email",
                                        className: "emails border-b-2 border-black w-full py-2.5 hover:border-b-[3px]",
                                        required: true,
                                        onChange: (e)=>setEmail(e.target.value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-2 my-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block my-2",
                                        children: "Phone*:"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "tel",
                                        id: "phone",
                                        className: "phones border-b-2 border-black w-full py-2.5 hover:border-b-[3px]",
                                        pattern: "[0-9]{10}",
                                        title: "Mobile number should contain 10 digits.",
                                        required: true,
                                        onChange: (e)=>setPhone(e.target.value)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-2 my-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block my-2",
                                        children: "Select a Service:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                        name: "dropdown",
                                        id: "selectService",
                                        className: "border-b-2 border-black focus:none outline:none py-2.5 w-full",
                                        onChange: (e)=>setService(e.target.value),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "Construction",
                                                selected: true,
                                                children: "Construction"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "Interiors",
                                                children: "Interiors"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                value: "Project-Management",
                                                children: "Project Management"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "col-span-2 my-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block my-2",
                                        children: "Location:"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                value: "Chennai",
                                                type: "radio",
                                                name: "location",
                                                checked: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                htmlFor: "Chennai",
                                                className: "m-2",
                                                children: "Chennai"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "col-span-2 place-self-end",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    id: "submit-button",
                                    className: "w-32 h-32 border border-black rounded-full hover:bg-black hover:text-white",
                                    children: "SUBMIT"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BookConsultation);


/***/ })

};
;