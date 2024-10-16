"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Navbar.scss");
var hooks_1 = require("../../redux/hooks");
var languageSlice_1 = require("../../redux/reducers/languageSlice");
var language_1 = require("../../util/language");
function Navbar() {
    var _a;
    var languageChosen = hooks_1.useAppSelector(function (state) { return state.language; });
    var dispatch = hooks_1.useAppDispatch();
    function onClickChange(language) {
        dispatch(languageSlice_1.changeLanguage(language));
    }
    return (react_1["default"].createElement("div", { className: 'n-container' },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", { className: 'navbar-name' }, "Marko Scekic")),
        react_1["default"].createElement("div", { className: 'navbar-menu' }, (_a = language_1.languageTexts
            .find(function (language) { return language.name === languageChosen; })) === null || _a === void 0 ? void 0 : _a.navbar.map(function (item) { return (react_1["default"].createElement("p", { key: item }, item)); })),
        react_1["default"].createElement("div", { className: 'big-circle' }),
        react_1["default"].createElement("div", { className: 'language-menu' },
            react_1["default"].createElement("p", { onClick: function () { return onClickChange("EN"); }, style: languageChosen === "EN" ? { textDecoration: "underline" } : {} }, "En"),
            react_1["default"].createElement("p", { onClick: function () { return onClickChange("RU"); }, style: languageChosen === "RU" ? { textDecoration: "underline" } : {} }, "Ru"),
            react_1["default"].createElement("p", { onClick: function () { return onClickChange("SR"); }, style: languageChosen === "SR" ? { textDecoration: "underline" } : {} }, "Sr"))));
}
exports["default"] = Navbar;
