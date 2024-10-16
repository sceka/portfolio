import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
	language: string;
}

const initialState: LanguageState = {
	language: "EN"
};

export const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		changeToEnglish: state => {
			state.language = "EN";
		},
		changeToRussian: state => {
			state.language = "RU";
		},
		changeToSerbian: state => {
			state.language = "SR";
		},
		changeLanguage: (state, action: PayloadAction<string>) => {
			state.language = action.payload;
		}
	}
});

export const { changeToEnglish, changeToRussian, changeToSerbian, changeLanguage } =
	languageSlice.actions;

export default languageSlice.reducer;
