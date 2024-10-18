"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Button_1 = require("../Button/Button");
require("./TwoPieceButton.scss");
function TwoPieceButton(_a) {
    var icon = _a.icon;
    return (react_1["default"].createElement("div", { className: 'github-wrapper' },
        react_1["default"].createElement(Button_1["default"], { onClick: function () { }, variant: 'white-outline', icon: icon === "github" ? "/images/github.png" : "/images/website.png", className: 'github' }),
        react_1["default"].createElement(Button_1["default"], { onClick: function () { }, variant: 'fill', icon: '/images/diagonalRight.svg', className: 'arrow-button', iconClassName: 'diagonal-arrow' })));
}
exports["default"] = TwoPieceButton;
