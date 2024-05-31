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

eval(__webpack_require__.ts("__webpack_require__.a(module, async function (__webpack_handle_async_dependencies__, __webpack_async_result__) { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RequestRow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ethereum_web3__WEBPACK_IMPORTED_MODULE_2__, _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__]);\n([_ethereum_web3__WEBPACK_IMPORTED_MODULE_2__, _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction RequestRow(param) {\n    let { id, request, address, approversCount } = param;\n    async function OnApprove() {\n        const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n        await campaign.methods.approveRequest(id).send({\n            from: accounts[0]\n        });\n    }\n    ;\n    async function OnFinalize() {\n        const campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n        const accounts = await _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].eth.getAccounts();\n        await campaign.methods.finalize(id).send({\n            from: accounts[0]\n        });\n    }\n    ;\n    const { Row, Cell } = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table;\n    const readyToFinalize = request.approvalCount > approversCount / 2;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        disabled: request.complete,\n        positive: readyToFinalize && !request.complete,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.description\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.recipient\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: [\n                    request.approvalCount,\n                    \"/\",\n                    approversCount\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.complete ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    onClick: OnApprove,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: request.complete ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"red\",\n                    basic: true,\n                    onClick: OnFinalize,\n                    children: \"Finalize\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PARAM\\\\Documents\\\\GitHub\\\\SmrtCntrct\\\\campaign\\\\components\\\\requestRow.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_c = RequestRow;\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlcXVlc3RSb3cuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2dCO0FBQ047QUFDTztBQUNDO0FBRzdCLFNBQVNLLFdBQVcsS0FBc0M7UUFBdEMsRUFBQ0MsRUFBRSxFQUFFQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsY0FBYyxFQUFDLEdBQXRDO0lBQy9CLGVBQWVDO1FBQ1gsTUFBTUMsV0FBV1AsOERBQVFBLENBQUNJO1FBQzFCLE1BQU1JLFdBQVcsTUFBTVYsMERBQVEsQ0FBQ1ksV0FBVztRQUMzQyxNQUFNSCxTQUFTSSxPQUFPLENBQUNDLGNBQWMsQ0FBQ1YsSUFBSVcsSUFBSSxDQUFDO1lBQzNDQyxNQUFNTixRQUFRLENBQUMsRUFBRTtRQUNyQjtJQUNKOztJQUVBLGVBQWVPO1FBQ1gsTUFBTVIsV0FBV1AsOERBQVFBLENBQUNJO1FBQzFCLE1BQU1JLFdBQVcsTUFBTVYsMERBQVEsQ0FBQ1ksV0FBVztRQUMzQyxNQUFNSCxTQUFTSSxPQUFPLENBQUNLLFFBQVEsQ0FBQ2QsSUFBSVcsSUFBSSxDQUFDO1lBQ3JDQyxNQUFNTixRQUFRLENBQUMsRUFBRTtRQUNyQjtJQUNKOztJQUNBLE1BQU0sRUFBRVMsR0FBRyxFQUFFQyxJQUFJLEVBQUUsR0FBR3JCLG9EQUFLQTtJQUMzQixNQUFNc0Isa0JBQWtCaEIsUUFBUWlCLGFBQWEsR0FBQ2YsaUJBQWdCO0lBQzlELHFCQUNJLDhEQUFDWTtRQUFJSSxVQUFVbEIsUUFBUW1CLFFBQVE7UUFBRUMsVUFBVUosbUJBQW1CLENBQUNoQixRQUFRbUIsUUFBUTs7MEJBQzNFLDhEQUFDSjswQkFDSWhCOzs7Ozs7MEJBRUwsOERBQUNnQjswQkFDSWYsUUFBUXFCLFdBQVc7Ozs7OzswQkFFeEIsOERBQUNOOzBCQUNJcEIsNERBQVUsQ0FBQzRCLE9BQU8sQ0FBQ3ZCLFFBQVF3QixLQUFLLEVBQUU7Ozs7OzswQkFFdkMsOERBQUNUOzBCQUNJZixRQUFReUIsU0FBUzs7Ozs7OzBCQUV0Qiw4REFBQ1Y7O29CQUNJZixRQUFRaUIsYUFBYTtvQkFBQztvQkFBRWY7Ozs7Ozs7MEJBRTdCLDhEQUFDYTswQkFDSWYsUUFBUW1CLFFBQVEsR0FBQyxxQkFDbEIsOERBQUN2QixxREFBTUE7b0JBQUM4QixPQUFNO29CQUFRQyxLQUFLO29CQUFDQyxTQUFTekI7OEJBQVc7Ozs7Ozs7Ozs7OzBCQUlwRCw4REFBQ1k7MEJBQ0lmLFFBQVFtQixRQUFRLEdBQUMscUJBQ2xCLDhEQUFDdkIscURBQU1BO29CQUFDOEIsT0FBTTtvQkFBTUMsS0FBSztvQkFBQ0MsU0FBU2hCOzhCQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQU0vRDtLQWpEd0JkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmVxdWVzdFJvdy5qcz84ZThjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlcXVlc3RSb3coe2lkLCByZXF1ZXN0LCBhZGRyZXNzLCBhcHByb3ZlcnNDb3VudH0pe1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gT25BcHByb3ZlICgpe1xyXG4gICAgICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gICAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuYXBwcm92ZVJlcXVlc3QoaWQpLnNlbmQoe1xyXG4gICAgICAgICAgICBmcm9tOiBhY2NvdW50c1swXVxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIE9uRmluYWxpemUgKCl7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihhZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XHJcbiAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZShpZCkuc2VuZCh7XHJcbiAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdXHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbiAgICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XHJcbiAgICBjb25zdCByZWFkeVRvRmluYWxpemUgPSByZXF1ZXN0LmFwcHJvdmFsQ291bnQ+YXBwcm92ZXJzQ291bnQgLzI7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSb3cgZGlzYWJsZWQ9e3JlcXVlc3QuY29tcGxldGV9IHBvc2l0aXZlPXtyZWFkeVRvRmluYWxpemUgJiYgIXJlcXVlc3QuY29tcGxldGV9PlxyXG4gICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgIHtpZH1cclxuICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgIHtyZXF1ZXN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICA8L0NlbGw+XHJcbiAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAge3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCAnZXRoZXInKX1cclxuICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgIHtyZXF1ZXN0LnJlY2lwaWVudH1cclxuICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgIHtyZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3thcHByb3ZlcnNDb3VudH1cclxuICAgICAgICAgICAgPC9DZWxsPlxyXG4gICAgICAgICAgICA8Q2VsbD5cclxuICAgICAgICAgICAgICAgIHtyZXF1ZXN0LmNvbXBsZXRlP251bGw6KFxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj0nZ3JlZW4nIGJhc2ljIG9uQ2xpY2s9e09uQXBwcm92ZX0+QXBwcm92ZTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0NlbGw+XHJcbiAgICAgICAgICAgIDxDZWxsPlxyXG4gICAgICAgICAgICAgICAge3JlcXVlc3QuY29tcGxldGU/bnVsbDooXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPSdyZWQnIGJhc2ljIG9uQ2xpY2s9e09uRmluYWxpemV9PkZpbmFsaXplPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQ2VsbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhYmxlIiwid2ViMyIsIkJ1dHRvbiIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsImlkIiwicmVxdWVzdCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIk9uQXBwcm92ZSIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJldGgiLCJnZXRBY2NvdW50cyIsIm1ldGhvZHMiLCJhcHByb3ZlUmVxdWVzdCIsInNlbmQiLCJmcm9tIiwiT25GaW5hbGl6ZSIsImZpbmFsaXplIiwiUm93IiwiQ2VsbCIsInJlYWR5VG9GaW5hbGl6ZSIsImFwcHJvdmFsQ291bnQiLCJkaXNhYmxlZCIsImNvbXBsZXRlIiwicG9zaXRpdmUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiY29sb3IiLCJiYXNpYyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/requestRow.js\n"));

/***/ })

});