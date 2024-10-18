"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./WorkLayout.scss");
var TwoPieceButton_1 = require("../TwoPieceButton/TwoPieceButton");
function WorkLayout(_a) {
    var jobName = _a.jobName, inverse = _a.inverse, skills = _a.skills, description = _a.description, description1 = _a.description1, description2 = _a.description2, github = _a.github, website = _a.website;
    return (react_1["default"].createElement("div", { className: !inverse ? "work-layout-normal" : "work-layout-inverse" },
        react_1["default"].createElement("div", { className: 'work-details' },
            react_1["default"].createElement("h1", null, jobName),
            react_1["default"].createElement("div", { className: 'work-details-skills' }, skills.map(function (skill) { return (react_1["default"].createElement("div", { className: 'skills-circle' }, skill)); })),
            react_1["default"].createElement("div", { className: 'company-description' },
                description && react_1["default"].createElement("p", { dangerouslySetInnerHTML: { __html: description } }),
                description1 && (react_1["default"].createElement("p", { className: 'company-description1', dangerouslySetInnerHTML: { __html: description1 } })),
                description2 && (react_1["default"].createElement("p", { className: 'company-description2', dangerouslySetInnerHTML: { __html: description2 } }))),
            react_1["default"].createElement("div", { className: 'external-link-button' },
                !github && react_1["default"].createElement(TwoPieceButton_1["default"], { icon: 'github' }),
                !website && react_1["default"].createElement(TwoPieceButton_1["default"], { icon: 'website' })))));
}
exports["default"] = WorkLayout;
