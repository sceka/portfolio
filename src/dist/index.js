"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
var App_1 = require("./App");
var react_redux_1 = require("react-redux");
var redux_1 = require("./redux");
var root = client_1["default"].createRoot(document.getElementById("root"));
root.render(react_1["default"].createElement(react_redux_1.Provider, { store: redux_1.store },
    react_1["default"].createElement(App_1["default"], null)));
