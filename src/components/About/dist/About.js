"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./About.scss");
function About() {
    return (react_1["default"].createElement("div", { className: 'about-container' },
        react_1["default"].createElement("div", { className: 'about-title-section' },
            react_1["default"].createElement("h4", null, ".../About me..."),
            react_1["default"].createElement("div", { className: 'about-description' },
                react_1["default"].createElement("p", null,
                    "Hello! I am Marko, I'm ",
                    react_1["default"].createElement("span", null, "full-stack developer"),
                    ". More than",
                    " ",
                    react_1["default"].createElement("span", null, "3 years"),
                    " experience."))),
        react_1["default"].createElement("div", { className: 'skills-and-image-container' },
            react_1["default"].createElement("div", { className: 'skills-container' },
                react_1["default"].createElement("div", { className: 'first-box' },
                    react_1["default"].createElement("h4", null, "Front-end"),
                    react_1["default"].createElement("p", null, "Typescript / React / Vue / Vuex / Redux Toolkit / React Native / Quasar Framework")),
                react_1["default"].createElement("div", { className: 'second-box' },
                    react_1["default"].createElement("h4", null, "Styles"),
                    react_1["default"].createElement("p", null, "Typescript / React Native / Quasar Framework"))))));
}
exports["default"] = About;
