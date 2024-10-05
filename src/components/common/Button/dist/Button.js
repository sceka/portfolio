"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Button.scss");
function Button(_a) {
    var variant = _a.variant, icon = _a.icon, label = _a.label, className = _a.className, iconClassName = _a.iconClassName, onClick = _a.onClick;
    return (react_1["default"].createElement("button", { className: variant + " " + (className ? className : "button"), onClick: onClick }, label && !icon ? (react_1["default"].createElement("label", { className: 'label' }, label)) : !label && icon ? (react_1["default"].createElement("img", { className: (iconClassName ? iconClassName : "icon") + " " + (variant === "fill" ? "icon-fill" : ""), src: icon, alt: icon })) : (react_1["default"].createElement("div", { className: 'icon-and-label' },
        react_1["default"].createElement("img", { className: (iconClassName ? iconClassName : "icon") + " " + (variant === "fill" ? "icon-fill" : ""), src: icon, alt: icon }),
        react_1["default"].createElement("label", null, label)))));
}
exports["default"] = Button;
