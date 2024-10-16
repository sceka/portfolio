"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./About.scss");
var Button_1 = require("../common/Button/Button");
var language_1 = require("../../util/language");
var hooks_1 = require("../../redux/hooks");
var Avatar_1 = require("../common/Avatar/Avatar");
function About() {
    var _a, _b;
    var languageChosen = hooks_1.useAppSelector(function (state) { return state.language; });
    var aboutText = (_a = language_1.languageTexts.find(function (language) { return languageChosen === language.name; })) === null || _a === void 0 ? void 0 : _a.about;
    var aboutTechonlogiesText = (_b = language_1.languageTexts.find(function (language) { return languageChosen === language.name; })) === null || _b === void 0 ? void 0 : _b.aboutText;
    return (react_1["default"].createElement("div", { className: 'about-container' },
        react_1["default"].createElement("div", { className: 'about-title-section' },
            react_1["default"].createElement("h4", null, ".../About me..."),
            react_1["default"].createElement("div", { className: 'about-description' },
                react_1["default"].createElement("p", { dangerouslySetInnerHTML: { __html: aboutText } }))),
        react_1["default"].createElement("div", { className: 'skills-and-image-container' },
            react_1["default"].createElement("div", { className: 'skills-container' },
                react_1["default"].createElement("div", { className: 'first-box' },
                    react_1["default"].createElement("h4", null, "Front-end"),
                    react_1["default"].createElement("p", null, "Typescript / React / Vue / Vuex / Redux Toolkit / React Native / Quasar Framework")),
                react_1["default"].createElement("div", { className: 'second-box-about-me' },
                    react_1["default"].createElement("div", { className: 'second-box' },
                        react_1["default"].createElement("h4", null, "Styles"),
                        react_1["default"].createElement("p", null, "Typescript / React Native / Quasar Framework")),
                    react_1["default"].createElement("div", { className: 'github-button' },
                        react_1["default"].createElement("div", { className: 'github-wrapper' },
                            react_1["default"].createElement(Button_1["default"], { onClick: function () { }, variant: 'white-outline', icon: '/images/github.png', className: 'github' }),
                            react_1["default"].createElement(Button_1["default"], { onClick: function () { }, variant: 'fill', icon: '/images/diagonalRight.svg', className: 'arrow-button', iconClassName: 'diagonal-arrow' })))),
                react_1["default"].createElement("div", { className: 'first-box' },
                    react_1["default"].createElement("h4", null, "Front-end"),
                    react_1["default"].createElement("p", null, "Typescript / React / Vue / Vuex / Redux Toolkit / React Native / Quasar Framework")),
                react_1["default"].createElement("div", { className: 'last-about-section' },
                    react_1["default"].createElement("p", { className: 'last-section-description', dangerouslySetInnerHTML: {
                            __html: aboutTechonlogiesText
                        } }),
                    react_1["default"].createElement("div", { className: 'second-box' },
                        react_1["default"].createElement("h4", null, "DevOps"),
                        react_1["default"].createElement("p", null, "Nginx / Brotli / Docker / (CI/CD)")))),
            react_1["default"].createElement("div", { className: 'avatar-div' },
                react_1["default"].createElement(Avatar_1["default"], null)))));
}
exports["default"] = About;
