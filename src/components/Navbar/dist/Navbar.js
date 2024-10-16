"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Navbar.scss");
function Navbar() {
    var _a = react_1.useState("EN"), language = _a[0], setLanguage = _a[1];
    function onClickChange(language) {
        setLanguage(language);
    }
    return (react_1["default"].createElement("div", { className: 'n-container' },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: 'navbar-name' }, "Marko Scekic")),
        react_1["default"].createElement("div", { className: 'navbar-menu' },
            react_1["default"].createElement("p", null, "About"),
            react_1["default"].createElement("p", null, "Projects"),
            react_1["default"].createElement("p", null, "Bla"),
            react_1["default"].createElement("p", null, "Truc")),
        react_1["default"].createElement("div", { className: 'big-circle' }),
        react_1["default"].createElement("div", { className: 'language-menu' },
            react_1["default"].createElement("p", { onClick: function () { return onClickChange("EN"); }, style: language === "EN" ? { textDecoration: "underline" } : {} }, "En"),
            react_1["default"].createElement("p", { onClick: function () { return onClickChange("RU"); }, style: language === "RU" ? { textDecoration: "underline" } : {} }, "Ru"),
            react_1["default"].createElement("p", { onClick: function () { return onClickChange("SR"); }, style: language === "SR" ? { textDecoration: "underline" } : {} }, "Sr"))));
}
exports["default"] = Navbar;
