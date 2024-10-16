"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./HeroSection.scss");
var Button_1 = require("../common/Button/Button");
var CustomCarousel_1 = require("../common/CustomCarousel/CustomCarousel");
var hooks_1 = require("../../redux/hooks");
var language_1 = require("../../util/language");
var links = [
    {
        name: "github",
        link: "https://github.com/sceka"
    },
    {
        name: "linkedin",
        link: "https://www.linkedin.com/in/scekicmarko/"
    }
];
function onClickBtn(icon) {
    links.map(function (link) {
        if (link.name === icon)
            window.location.href = link.link;
    });
}
function HeroSection() {
    var _a, _b, _c;
    var languageChosen = hooks_1.useAppSelector(function (state) { return state.language; });
    var selectedText = (_a = language_1.languageTexts.find(function (language) { return language.name === languageChosen; })) === null || _a === void 0 ? void 0 : _a.hero;
    var buttonText = (_b = language_1.languageTexts.find(function (language) { return language.name === languageChosen; })) === null || _b === void 0 ? void 0 : _b.cvButton;
    var heroDeveloperWord = (_c = language_1.languageTexts.find(function (language) { return language.name === languageChosen; })) === null || _c === void 0 ? void 0 : _c.heroDeveloperWord;
    return (react_1["default"].createElement("div", { className: 'hero-section' },
        react_1["default"].createElement("div", { className: 'first-section' },
            react_1["default"].createElement("div", { className: 'first-section-title' }, "Full-stack"),
            " ",
            react_1["default"].createElement("div", { className: 'buttons' },
                react_1["default"].createElement("div", { className: 'projects-button' },
                    react_1["default"].createElement(Button_1["default"], { variant: 'fill', label: buttonText, onClick: function () { } })),
                react_1["default"].createElement("div", { className: 'arrow-button' },
                    react_1["default"].createElement(Button_1["default"], { variant: 'fill', icon: '/images/right-arrow.png', onClick: function () { } })))),
        react_1["default"].createElement("div", { className: 'second-section' },
            react_1["default"].createElement("p", { dangerouslySetInnerHTML: { __html: selectedText } }),
            react_1["default"].createElement("h1", null, heroDeveloperWord)),
        react_1["default"].createElement("div", { className: 'action-buttons' },
            react_1["default"].createElement("div", { className: 'aciton-btns' },
                react_1["default"].createElement(Button_1["default"], { variant: 'gray-outline', label: 'Github', icon: '/images/github.png', className: 'action-btn', onClick: function () { return onClickBtn("github"); } }),
                react_1["default"].createElement(Button_1["default"], { variant: 'gray-outline', label: 'LinkedIn', icon: '/images/linkedin.png', className: 'action-btn', iconClassName: 'btn-icon', onClick: function () { return onClickBtn("linkedin"); } })),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(Button_1["default"], { variant: 'gray-outline', label: 'Github', icon: '/images/github.png', className: 'action-btn', 
                    // TODO: Add link
                    onClick: function () { } })),
            react_1["default"].createElement("div", { className: 'aciton-btns' },
                react_1["default"].createElement(Button_1["default"], { variant: 'gray-outline', label: 'Github', icon: '/images/github.png', className: 'action-btn', 
                    // TODO: Add link
                    onClick: function () { } }),
                react_1["default"].createElement(Button_1["default"], { variant: 'gray-outline', label: 'Github', icon: '/images/github.png', className: 'action-btn', 
                    // TODO: Add link
                    onClick: function () { } }))),
        react_1["default"].createElement("div", { className: 'carousel-container' },
            react_1["default"].createElement(CustomCarousel_1["default"], null))));
}
exports["default"] = HeroSection;
