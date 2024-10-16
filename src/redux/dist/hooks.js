"use strict";
exports.__esModule = true;
exports.useAppStore = exports.useAppSelector = exports.useAppDispatch = void 0;
var react_redux_1 = require("react-redux");
exports.useAppDispatch = react_redux_1.useDispatch.withTypes();
exports.useAppSelector = react_redux_1.useSelector.withTypes();
exports.useAppStore = react_redux_1.useStore.withTypes();
