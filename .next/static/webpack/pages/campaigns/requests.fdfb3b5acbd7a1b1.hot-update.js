"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./pages/campaigns/requests/index.js":
/*!*******************************************!*\
  !*** ./pages/campaigns/requests/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RequestIndex; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routes */ \"./routes.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _components_requestRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/requestRow */ \"./components/requestRow.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__, _components_requestRow__WEBPACK_IMPORTED_MODULE_5__]);\n([_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__, _components_requestRow__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nRequestIndex.getInitialProps = async (ctx)=>{\n    const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(ctx.query.address);\n    const requestCount = await campaign.methods.getRequestCount().call();\n    const approversCount = await campaign.methods.approversCount().call();\n    const requests = await Promise.all(Array(parseInt(requestCount)).fill().map((element, index)=>{\n        return campaign.methods.requests(index).call();\n    }));\n    const serializedRequests = requests.map((request)=>({\n            description: request.description,\n            value: request.value.toString(),\n            recipient: request.recipient,\n            complete: request.complete,\n            approvalCount: request.approvalCount.toString()\n        }));\n    return {\n        address: ctx.query.address,\n        requests: serializedRequests,\n        requestCount: parseInt(requestCount),\n        approversCount: parseInt(approversCount)\n    };\n};\nfunction RequestIndex(param) {\n    let { address, requests, requestCount, approversCount } = param;\n    const { Header, Row, HeaderCell, Body } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table;\n    function renderRow() {\n        return requests.map((request, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_requestRow__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                id: index + 1,\n                request: request,\n                address: address,\n                approversCount: approversCount\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 21\n            }, this);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Pending Requests\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_routes__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                route: \"/campaigns/\".concat(address, \"/requests/new\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    floated: \"right\",\n                    style: {\n                        marginBottom: \"10px\"\n                    },\n                    primary: true,\n                    children: \"Add Request\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Amount\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Recipient\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Approval Count\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Approve\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Finalize\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {\n                        children: renderRow()\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Found \",\n                    requestCount,\n                    \" requests.\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n                lineNumber: 72,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\pages\\\\campaigns\\\\requests\\\\index.js\",\n        lineNumber: 51,\n        columnNumber: 9\n    }, this);\n}\n_c = RequestIndex;\nvar _c;\n$RefreshReg$(_c, \"RequestIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ3NCO0FBQ1Q7QUFDVztBQUNBO0FBQ007QUFHeERPLGFBQWFDLGVBQWUsR0FBRyxPQUFPQztJQUNsQyxNQUFNQyxXQUFXTCw4REFBUUEsQ0FBQ0ksSUFBSUUsS0FBSyxDQUFDQyxPQUFPO0lBQzNDLE1BQU1DLGVBQWUsTUFBTUgsU0FBU0ksT0FBTyxDQUFDQyxlQUFlLEdBQUdDLElBQUk7SUFDbEUsTUFBTUMsaUJBQWlCLE1BQU1QLFNBQVNJLE9BQU8sQ0FBQ0csY0FBYyxHQUFHRCxJQUFJO0lBQ25FLE1BQU1FLFdBQVcsTUFBTUMsUUFBUUMsR0FBRyxDQUM5QkMsTUFBTUMsU0FBU1QsZUFBZVUsSUFBSSxHQUFHQyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0M7UUFDL0MsT0FBT2hCLFNBQVNJLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDUSxPQUFPVixJQUFJO0lBQ2hEO0lBSUosTUFBTVcscUJBQXFCVCxTQUFTTSxHQUFHLENBQUNJLENBQUFBLFVBQVk7WUFDaERDLGFBQWFELFFBQVFDLFdBQVc7WUFDaENDLE9BQU9GLFFBQVFFLEtBQUssQ0FBQ0MsUUFBUTtZQUM3QkMsV0FBV0osUUFBUUksU0FBUztZQUM1QkMsVUFBVUwsUUFBUUssUUFBUTtZQUMxQkMsZUFBZU4sUUFBUU0sYUFBYSxDQUFDSCxRQUFRO1FBQy9DO0lBR0YsT0FBTztRQUNIbkIsU0FBU0gsSUFBSUUsS0FBSyxDQUFDQyxPQUFPO1FBQzFCTSxVQUFVUztRQUNWZCxjQUFjUyxTQUFTVDtRQUN2QkksZ0JBQWdCSyxTQUFTTDtJQUM3QjtBQUNGO0FBRWEsU0FBU1YsYUFBYyxLQUFpRDtRQUFqRCxFQUFDSyxPQUFPLEVBQUVNLFFBQVEsRUFBRUwsWUFBWSxFQUFFSSxjQUFjLEVBQUMsR0FBakQ7SUFDbEMsTUFBTSxFQUFFa0IsTUFBTSxFQUFFQyxHQUFHLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFLEdBQUdsQyxvREFBS0E7SUFDL0MsU0FBU21DO1FBQ0wsT0FBT3JCLFNBQVNNLEdBQUcsQ0FBQyxDQUFDSSxTQUFTRjtZQUMxQixxQkFBUSw4REFBQ3BCLDhEQUFVQTtnQkFFZmtDLElBQUlkLFFBQU07Z0JBQ1ZFLFNBQVNBO2dCQUNUaEIsU0FBU0E7Z0JBQ1RLLGdCQUFnQkE7ZUFKWFM7Ozs7O1FBTWI7SUFDSjtJQUNBLHFCQUNJLDhEQUFDekIsMERBQU1BOzswQkFDSCw4REFBQ3dDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUN2Qyx5Q0FBSUE7Z0JBQUN3QyxPQUFPLGNBQXNCLE9BQVI5QixTQUFROzBCQUMvQiw0RUFBQ1QscURBQU1BO29CQUFDd0MsU0FBUTtvQkFBUUMsT0FBTzt3QkFBQ0MsY0FBYztvQkFBTTtvQkFBR0MsT0FBTzs4QkFBQzs7Ozs7Ozs7Ozs7MEJBRW5FLDhEQUFDMUMsb0RBQUtBOztrQ0FDRiw4REFBQytCO2tDQUNHLDRFQUFDQzs7OENBQ0csOERBQUNDOzhDQUFXOzs7Ozs7OENBQ1osOERBQUNBOzhDQUFXOzs7Ozs7OENBQ1osOERBQUNBOzhDQUFXOzs7Ozs7OENBQ1osOERBQUNBOzhDQUFXOzs7Ozs7OENBQ1osOERBQUNBOzhDQUFXOzs7Ozs7OENBQ1osOERBQUNBOzhDQUFXOzs7Ozs7OENBQ1osOERBQUNBOzhDQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHcEIsOERBQUNDO2tDQUNJQzs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDUTs7b0JBQUk7b0JBQ01sQztvQkFBYTs7Ozs7Ozs7Ozs7OztBQUlwQztLQXhDd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcz9kNjg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXRcIjtcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3JlcXVlc3RSb3dcIjtcclxuXHJcblxyXG5SZXF1ZXN0SW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihjdHgucXVlcnkuYWRkcmVzcyk7XHJcbiAgICBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RDb3VudCgpLmNhbGwoKTtcclxuICAgIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcclxuICAgIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgQXJyYXkocGFyc2VJbnQocmVxdWVzdENvdW50KSkuZmlsbCgpLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKTtcclxuICAgICAgICB9KVxyXG4gICAgKVxyXG5cclxuXHJcbiAgICBjb25zdCBzZXJpYWxpemVkUmVxdWVzdHMgPSByZXF1ZXN0cy5tYXAocmVxdWVzdCA9PiAoe1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiByZXF1ZXN0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHZhbHVlOiByZXF1ZXN0LnZhbHVlLnRvU3RyaW5nKCksIC8vIENvbnZlcnQgQmlnSW50IHRvIHN0cmluZ1xyXG4gICAgICAgIHJlY2lwaWVudDogcmVxdWVzdC5yZWNpcGllbnQsXHJcbiAgICAgICAgY29tcGxldGU6IHJlcXVlc3QuY29tcGxldGUsXHJcbiAgICAgICAgYXBwcm92YWxDb3VudDogcmVxdWVzdC5hcHByb3ZhbENvdW50LnRvU3RyaW5nKCksIC8vIENvbnZlcnQgQmlnSW50IHRvIHN0cmluZ1xyXG4gICAgICB9KSk7XHJcbiAgICAgIFxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYWRkcmVzczogY3R4LnF1ZXJ5LmFkZHJlc3MsXHJcbiAgICAgICAgcmVxdWVzdHM6IHNlcmlhbGl6ZWRSZXF1ZXN0cyxcclxuICAgICAgICByZXF1ZXN0Q291bnQ6IHBhcnNlSW50KHJlcXVlc3RDb3VudCksXHJcbiAgICAgICAgYXBwcm92ZXJzQ291bnQ6IHBhcnNlSW50KGFwcHJvdmVyc0NvdW50KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcXVlc3RJbmRleCAoe2FkZHJlc3MsIHJlcXVlc3RzLCByZXF1ZXN0Q291bnQsIGFwcHJvdmVyc0NvdW50fSl7XHJcbiAgICBjb25zdCB7IEhlYWRlciwgUm93LCBIZWFkZXJDZWxsLCBCb2R5IH0gPSBUYWJsZTtcclxuICAgIGZ1bmN0aW9uIHJlbmRlclJvdygpIHtcclxuICAgICAgICByZXR1cm4gcmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKDxSZXF1ZXN0Um93IFxyXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgIGlkPXtpbmRleCsxfVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdD17cmVxdWVzdH1cclxuICAgICAgICAgICAgICAgIGFkZHJlc3M9e2FkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICBhcHByb3ZlcnNDb3VudD17YXBwcm92ZXJzQ291bnR9XHJcbiAgICAgICAgICAgIC8+KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMz5QZW5kaW5nIFJlcXVlc3RzPC9oMz5cclxuICAgICAgICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zLyR7YWRkcmVzc30vcmVxdWVzdHMvbmV3YH0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGZsb2F0ZWQ9XCJyaWdodFwiIHN0eWxlPXt7bWFyZ2luQm90dG9tOiAnMTBweCd9fSBwcmltYXJ5PkFkZCBSZXF1ZXN0PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5JRDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RGVzY3JpcHRpb248L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+UmVjaXBpZW50PC9IZWFkZXJDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyQ2VsbD5BcHByb3ZhbCBDb3VudDwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRlckNlbGw+RmluYWxpemU8L0hlYWRlckNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtyZW5kZXJSb3coKX1cclxuICAgICAgICAgICAgICAgIDwvQm9keT5cclxuICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIEZvdW5kIHtyZXF1ZXN0Q291bnR9IHJlcXVlc3RzLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkxpbmsiLCJCdXR0b24iLCJUYWJsZSIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImNhbXBhaWduIiwicXVlcnkiLCJhZGRyZXNzIiwicmVxdWVzdENvdW50IiwibWV0aG9kcyIsImdldFJlcXVlc3RDb3VudCIsImNhbGwiLCJhcHByb3ZlcnNDb3VudCIsInJlcXVlc3RzIiwiUHJvbWlzZSIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwibWFwIiwiZWxlbWVudCIsImluZGV4Iiwic2VyaWFsaXplZFJlcXVlc3RzIiwicmVxdWVzdCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJ0b1N0cmluZyIsInJlY2lwaWVudCIsImNvbXBsZXRlIiwiYXBwcm92YWxDb3VudCIsIkhlYWRlciIsIlJvdyIsIkhlYWRlckNlbGwiLCJCb2R5IiwicmVuZGVyUm93IiwiaWQiLCJoMyIsInJvdXRlIiwiZmxvYXRlZCIsInN0eWxlIiwibWFyZ2luQm90dG9tIiwicHJpbWFyeSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/index.js\n"));

/***/ })

});