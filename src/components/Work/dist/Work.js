"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./Work.scss");
var WorkLayout_1 = require("../common/WorkLayout/WorkLayout");
var work_1 = require("../../util/work");
var language_1 = require("../../util/language");
var hooks_1 = require("../../redux/hooks");
function Work() {
    var languageChosen = hooks_1.useAppSelector(function (state) { return state.language; });
    var language = language_1.languageTexts.find(function (lan) { return languageChosen === lan.name; });
    var workTitle = language === null || language === void 0 ? void 0 : language.workTitle;
    var developerWord = language === null || language === void 0 ? void 0 : language.developerWord;
    var senior = language === null || language === void 0 ? void 0 : language.senior;
    var august = language === null || language === void 0 ? void 0 : language.august;
    var september = language === null || language === void 0 ? void 0 : language.september;
    var march = language === null || language === void 0 ? void 0 : language.march;
    var decembar = language === null || language === void 0 ? void 0 : language.decembar;
    var jun = language === null || language === void 0 ? void 0 : language.jun;
    var november = language === null || language === void 0 ? void 0 : language.november;
    var description = language === null || language === void 0 ? void 0 : language.description;
    var description1 = language === null || language === void 0 ? void 0 : language.description1;
    var workExperience = [
        {
            name: "Fuel Me",
            years: august + " 2023 - " + september + " 2024",
            total: "1 year 1 month",
            position: senior + " Backend " + developerWord,
            type: "Hybrid"
        },
        {
            name: "Fuel Me",
            years: march + " 2023 - " + august + " 2023",
            total: "1 year 1 month",
            position: "Full Stack " + developerWord,
            type: "Remote"
        },
        {
            name: "Wiv Technology",
            years: decembar + " 2021 - " + march + " 2023",
            total: "1 year 4 months",
            position: "Full Stack " + developerWord,
            type: "Remote"
        },
        {
            name: "Fuel Me",
            years: jun + " 2021 - " + november + " 2021",
            total: "6 months",
            position: "Full Stack " + developerWord,
            type: "Remote"
        }
    ];
    return (react_1["default"].createElement("div", { className: 'work-container' },
        react_1["default"].createElement("h1", null, workTitle),
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
