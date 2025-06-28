import { createSlice } from "@reduxjs/toolkit";
import { templateInitialState } from "./initialState";
import { setTemplateKeyAction } from "./actions";

export * from "./selectors"
const templateSlice = createSlice({
    name: "template",
    initialState: templateInitialState,
    reducers: {
       setTemplateKey: setTemplateKeyAction
    }
})

export const {setTemplateKey} = templateSlice.actions;
export default templateSlice.reducer;