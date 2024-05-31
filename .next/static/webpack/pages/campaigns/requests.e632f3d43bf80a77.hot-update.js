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

/***/ "./components/requestRow.js":
/*!**********************************!*\
  !*** ./components/requestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RequestRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ethereum_web3__WEBPACK_IMPORTED_MODULE_2__, _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__]);\n([_ethereum_web3__WEBPACK_IMPORTED_MODULE_2__, _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction RequestRow(param) {\n    let { id, request, address, approversCount } = param;\n    async function OnApprove() {\n        const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n        await campaign.methods.finalizeRequest(id).send({\n            from: accounts[0]\n        });\n    }\n    ;\n    async function OnFinalize() {\n        const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n        await campaign.methods.approveRequest(id).send({\n            from: accounts[0]\n        });\n    }\n    ;\n    const { Row, Cell } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table;\n    const readyToFinalize = request.approvalCount > approversCount / 2;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        disabled: request.complete,\n        positive: readyToFinalize && !re,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: [\n                    request.approvalCount,\n                    \"/\",\n                    approversCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.complete ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    onClick: OnApprove,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.complete ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"red\",\n                    basic: true,\n                    onClick: OnFinalize,\n                    children: \"Finalize\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = RequestRow;\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcXVlc3RSb3cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ047QUFDTztBQUNDO0FBRzdCLFNBQVNLLFdBQVcsS0FBc0M7UUFBdEMsRUFBQ0MsRUFBRSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsY0FBYyxFQUFDLEdBQXRDO0lBQy9CLGVBQWVDO1FBQ1gsTUFBTUMsV0FBV1AsOERBQVFBLENBQUNJO1FBQzFCLE1BQU1JLFdBQVcsTUFBTVYsMERBQVEsQ0FBQ1ksV0FBVztRQUMzQyxNQUFNSCxTQUFTSSxPQUFPLENBQUNDLGVBQWUsQ0FBQ1YsSUFBSVcsSUFBSSxDQUFDO1lBQzVDQyxNQUFNTixRQUFRLENBQUMsRUFBRTtRQUNyQjtJQUNKOztJQUVBLGVBQWVPO1FBQ1gsTUFBTVIsV0FBV1AsOERBQVFBLENBQUNJO1FBQzFCLE1BQU1JLFdBQVcsTUFBTVYsMERBQVEsQ0FBQ1ksV0FBVztRQUMzQyxNQUFNSCxTQUFTSSxPQUFPLENBQUNLLGNBQWMsQ0FBQ2QsSUFBSVcsSUFBSSxDQUFDO1lBQzNDQyxNQUFNTixRQUFRLENBQUMsRUFBRTtRQUNyQjtJQUNKOztJQUNBLE1BQU0sRUFBRVMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsR0FBR3JCLG9EQUFLQTtJQUMzQixNQUFNc0Isa0JBQWtCaEIsUUFBUWlCLGFBQWEsR0FBQ2YsaUJBQWdCO0lBQzlELHFCQUNJLDhEQUFDWTtRQUFJSSxVQUFVbEIsUUFBUW1CLFFBQVE7UUFBRUMsVUFBVUosbUJBQW1CLENBQUNLOzswQkFDM0QsOERBQUNOOzBCQUNJaEI7Ozs7OzswQkFFTCw4REFBQ2dCOzBCQUNJZixRQUFRc0IsV0FBVzs7Ozs7OzBCQUV4Qiw4REFBQ1A7MEJBQ0lwQiw0REFBVSxDQUFDNkIsT0FBTyxDQUFDeEIsUUFBUXlCLEtBQUssRUFBRTs7Ozs7OzBCQUV2Qyw4REFBQ1Y7MEJBQ0lmLFFBQVEwQixTQUFTOzs7Ozs7MEJBRXRCLDhEQUFDWDs7b0JBQ0lmLFFBQVFpQixhQUFhO29CQUFDO29CQUFFZjs7Ozs7OzswQkFFN0IsOERBQUNhOzBCQUNJZixRQUFRbUIsUUFBUSxHQUFDLHFCQUNsQiw4REFBQ3ZCLHFEQUFNQTtvQkFBQytCLE9BQU07b0JBQVFDLEtBQUs7b0JBQUNDLFNBQVMxQjs4QkFBVzs7Ozs7Ozs7Ozs7MEJBSXBELDhEQUFDWTswQkFDSWYsUUFBUW1CLFFBQVEsR0FBQyxxQkFDbEIsOERBQUN2QixxREFBTUE7b0JBQUMrQixPQUFNO29CQUFNQyxLQUFLO29CQUFDQyxTQUFTakI7OEJBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTS9EO0tBakR3QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXF1ZXN0Um93LmpzPzhlOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVxdWVzdFJvdyh7aWQsIHJlcXVlc3QsIGFkZHJlc3MsIGFwcHJvdmVyc0NvdW50fSl7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBPbkFwcHJvdmUgKCl7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QoaWQpLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIE9uRmluYWxpemUgKCl7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlUmVxdWVzdChpZCkuc2VuZCh7XHJcbiAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XHJcbiAgICBjb25zdCByZWFkeVRvRmluYWxpemUgPSByZXF1ZXN0LmFwcHJvdmFsQ291bnQ+YXBwcm92ZXJzQ291bnQgLzI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgZGlzYWJsZWQ9e3JlcXVlc3QuY29tcGxldGV9IHBvc2l0aXZlPXtyZWFkeVRvRmluYWxpemUgJiYgIXJlfT5cclxuICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICB7aWR9XHJcbiAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICB7cmVxdWVzdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgIHt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgJ2V0aGVyJyl9XHJcbiAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICB7cmVxdWVzdC5yZWNpcGllbnR9XHJcbiAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICB7cmVxdWVzdC5hcHByb3ZhbENvdW50fS97YXBwcm92ZXJzQ291bnR9XHJcbiAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICAgICAgPENlbGw+XHJcbiAgICAgICAgICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZT9udWxsOihcclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9J2dyZWVuJyBiYXNpYyBvbkNsaWNrPXtPbkFwcHJvdmV9PkFwcHJvdmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgIHtyZXF1ZXN0LmNvbXBsZXRlP251bGw6KFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0ncmVkJyBiYXNpYyBvbkNsaWNrPXtPbkZpbmFsaXplfT5GaW5hbGl6ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0NlbGw+XHJcbiAgICAgICAgPC9Sb3c+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJUYWJsZSIsIndlYjMiLCJCdXR0b24iLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJpZCIsInJlcXVlc3QiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJPbkFwcHJvdmUiLCJjYW1wYWlnbiIsImFjY291bnRzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiZmluYWxpemVSZXF1ZXN0Iiwic2VuZCIsImZyb20iLCJPbkZpbmFsaXplIiwiYXBwcm92ZVJlcXVlc3QiLCJSb3ciLCJDZWxsIiwicmVhZHlUb0ZpbmFsaXplIiwiYXBwcm92YWxDb3VudCIsImRpc2FibGVkIiwiY29tcGxldGUiLCJwb3NpdGl2ZSIsInJlIiwiZGVzY3JpcHRpb24iLCJ1dGlscyIsImZyb21XZWkiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImNvbG9yIiwiYmFzaWMiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/requestRow.js\n"));

/***/ })

});