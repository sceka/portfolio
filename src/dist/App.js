"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.scss");
require("./styles/fonts.scss");
var Navbar_1 = require("./components/Navbar/Navbar");
var HeroSection_1 = require("./components/HeroSection/HeroSection");
var About_1 = require("./components/About/About");
var Work_1 = require("./components/Work/Work");
function App() {
    return (react_1["default"].createElement("div", { className: 'App' },
        react_1["default"].createElement(Navbar_1["default"], null),
        react_1["default"].createElement(HeroSection_1["default"], null),
        react_1["default"].createElement(About_1["default"], null),
        react_1["default"].createElement(Work_1["default"], null)));
}
exports["default"] = App;
