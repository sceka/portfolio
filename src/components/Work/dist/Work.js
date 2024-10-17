"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Work.scss");
var WorkLayout_1 = require("../common/WorkLayout/WorkLayout");
var work_1 = require("../../util/work");
function Work() {
    var workExperience = [
        {
            name: "Fuel Me",
            years: "Aug 2023 - Septembar 2024",
            total: "1 year 1 month",
            position: "Senior Backend Developer",
            type: "Hybrid"
        },
        {
            name: "Fuel Me",
            years: "March 2023 - August 2023",
            total: "1 year 1 month",
            position: "Full Stack Developer",
            type: "Remote"
        },
        {
            name: "Wiv Technology",
            years: "Decembar 2021 - March 2023",
            total: "1 year 4 months",
            position: "Full Stack Developer",
            type: "Remote"
        },
        {
            name: "Fuel Me",
            years: "Jun 2021 - November 2021",
            total: "6 months",
            position: "Full Stack Developer",
            type: "Remote"
        }
    ];
    return (react_1["default"].createElement("div", { className: 'work-container' },
        react_1["default"].createElement("h1", null, "Work"),
        workExperience.map(function (work) { return (react_1["default"].createElement("div", { className: 'work-experience' },
            react_1["default"].createElement("div", { className: 'years' },
                react_1["default"].createElement("p", { className: 'year' }, work.years),
                react_1["default"].createElement("p", { className: 'total-years' }, work.total)),
            react_1["default"].createElement("div", { className: 'name' }, work.name),
            react_1["default"].createElement("div", { className: 'position' },
                work.position,
                " | ",
                work.type))); }),
        react_1["default"].createElement("div", { className: 'total-work-years' },
            react_1["default"].createElement("h4", null, "Work Experience"),
            react_1["default"].createElement("h5", null, "3 years 7 months")),
        work_1.work.map(function (work) { return (react_1["default"].createElement(WorkLayout_1["default"], { description: work.description, description1: work.description1, inverse: false, jobName: work.name, skills: work.skils, key: 1 })); })));
}
exports["default"] = Work;
