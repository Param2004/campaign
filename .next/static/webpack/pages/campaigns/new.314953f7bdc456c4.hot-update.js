"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/new",{

/***/ "./pages/campaigns/new.js":
/*!********************************!*\
  !*** ./pages/campaigns/new.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CampaignNew; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/factory */ \"./ethereum/factory.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ethereum_factory__WEBPACK_IMPORTED_MODULE_3__, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__]);\n([_ethereum_factory__WEBPACK_IMPORTED_MODULE_3__, _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CampaignNew() {\n    _s();\n    const [minContribution, setMinContribution] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [errmsg, setErrmsg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function OnSubmit(event) {\n        event.preventDefault();\n        setLoading(true);\n        setErrmsg(\"\");\n        try {\n            const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_4__[\"default\"].eth.getAccounts();\n            await _ethereum_factory__WEBPACK_IMPORTED_MODULE_3__[\"default\"].methods.createCampaign(minContribution).send({\n                from: accounts[0]\n            });\n            _routes__WEBPACK_IMPORTED_MODULE_5__.Router.pushRoute(\"/\");\n        } catch (error) {\n            setErrmsg(error.message);\n            console.log(errmsg);\n        }\n        setLoading(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Create a Campaign\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\new.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                error: !!errmsg,\n                onSubmit: OnSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Minimum Contribution\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\new.js\",\n                                lineNumber: 36,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                label: \"wei\",\n                                labelPosition: \"right\",\n                                value: minContribution,\n                                onChange: (event)=>setMinContribution(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\new.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: errmsg\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        loading: loading,\n                        primary: true,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\new.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\new.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\new.js\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_s(CampaignNew, \"6rkq/TWB8dwR8db9xK70D1A7350=\");\n_c = CampaignNew;\nvar _c;\n$RefreshReg$(_c, \"CampaignNew\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvbmV3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDSztBQUNtQjtBQUNwQjtBQUNMO0FBQ0k7QUFFNUIsU0FBU1c7O0lBRXBCLE1BQU0sQ0FBQ0MsaUJBQWlCQyxtQkFBbUIsR0FBR1osK0NBQVFBLENBQUM7SUFDdkQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2UsU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUM7SUFFdkMsZUFBZWlCLFNBQVVDLEtBQUs7UUFDMUJBLE1BQU1DLGNBQWM7UUFDcEJILFdBQVc7UUFDWEYsVUFBVTtRQUNWLElBQUk7WUFDQSxNQUFNTSxXQUFXLE1BQU1iLDBEQUFRLENBQUNlLFdBQVc7WUFDM0MsTUFBTWhCLGlFQUFlLENBQUNrQixjQUFjLENBQUNiLGlCQUFpQmMsSUFBSSxDQUFDO2dCQUN2REMsTUFBTU4sUUFBUSxDQUFDLEVBQUU7WUFDckI7WUFDQVgsMkNBQU1BLENBQUNrQixTQUFTLENBQUM7UUFDckIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pkLFVBQVVjLE1BQU1DLE9BQU87WUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ2xCO1FBQ2hCO1FBQ0FHLFdBQVc7SUFDZjtJQUVBLHFCQUNJLDhEQUFDZiwwREFBTUE7OzBCQUNILDhEQUFDK0I7MEJBQUc7Ozs7OzswQkFDSiw4REFBQzlCLG1EQUFJQTtnQkFBQzBCLE9BQU8sQ0FBQyxDQUFDZjtnQkFBUW9CLFVBQVVoQjs7a0NBQzdCLDhEQUFDZixtREFBSUEsQ0FBQ2dDLEtBQUs7OzBDQUNQLDhEQUFDQzswQ0FBTTs7Ozs7OzBDQUNQLDhEQUFDaEMsb0RBQUtBO2dDQUNOZ0MsT0FBTTtnQ0FBTUMsZUFBYztnQ0FDMUJDLE9BQU8xQjtnQ0FDUDJCLFVBQVVwQixDQUFBQSxRQUFTTixtQkFBbUJNLE1BQU1xQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FHNUQsOERBQUNoQyxzREFBT0E7d0JBQUN1QixLQUFLO3dCQUFDWSxRQUFPO3dCQUFRQyxTQUFTNUI7Ozs7OztrQ0FDdkMsOERBQUNULHFEQUFNQTt3QkFBQ1csU0FBU0E7d0JBQVMyQixPQUFPO2tDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEQ7R0F4Q3dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL25ldy5qcz9iZDVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2xheW91dFwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uLE1lc3NhZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uLy4uL2V0aGVyZXVtL2ZhY3RvcnknXHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uLy4uL3JvdXRlcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhbXBhaWduTmV3ICgpIHtcclxuXHJcbiAgICBjb25zdCBbbWluQ29udHJpYnV0aW9uLCBzZXRNaW5Db250cmlidXRpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Vycm1zZywgc2V0RXJybXNnXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBPblN1Ym1pdCAoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBzZXRFcnJtc2coJycpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcclxuICAgICAgICAgICAgYXdhaXQgZmFjdG9yeS5tZXRob2RzLmNyZWF0ZUNhbXBhaWduKG1pbkNvbnRyaWJ1dGlvbikuc2VuZCh7XHJcbiAgICAgICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm1zZyhlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJybXNnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8aDM+Q3JlYXRlIGEgQ2FtcGFpZ248L2gzPlxyXG4gICAgICAgICAgICA8Rm9ybSBlcnJvcj17ISFlcnJtc2d9IG9uU3VibWl0PXtPblN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TWluaW11bSBDb250cmlidXRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD0nd2VpJyBsYWJlbFBvc2l0aW9uPVwicmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXttaW5Db250cmlidXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldE1pbkNvbnRyaWJ1dGlvbihldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0uRmllbGQ+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm1zZ30gLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17bG9hZGluZ30gcHJpbWFyeT5DcmVhdGUhPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGF5b3V0IiwiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiTWVzc2FnZSIsImZhY3RvcnkiLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkNhbXBhaWduTmV3IiwibWluQ29udHJpYnV0aW9uIiwic2V0TWluQ29udHJpYnV0aW9uIiwiZXJybXNnIiwic2V0RXJybXNnIiwibG9hZGluZyIsInNldExvYWRpbmciLCJPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhY2NvdW50cyIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZUNhbXBhaWduIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiaDMiLCJvblN1Ym1pdCIsIkZpZWxkIiwibGFiZWwiLCJsYWJlbFBvc2l0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/new.js\n"));

/***/ })

});