"use strict";
exports.__esModule = true;
exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var languageSlice_1 = require("./reducers/languageSlice");
exports.store = toolkit_1.configureStore({
    reducer: languageSlice_1["default"]
});
