import { createSlice } from "@reduxjs/toolkit";
import { commonInitialState } from "./initialState";
import * as Actions from "./actions";

const commonSlice = createSlice({
    name: "teacher-common",
    initialState: commonInitialState,
    reducers: {
        toggleSidebar: Actions.toggleSidebarAction,
        setCommonKey: Actions.setCommonKeyAction
    }
})
export const {toggleSidebar, setCommonKey} = commonSlice.actions;
export default commonSlice.reducer;