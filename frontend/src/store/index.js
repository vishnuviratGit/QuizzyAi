import {configureStore} from "@reduxjs/toolkit"
import commonSlice from "./features/common/commonSlice"
import templateSlice from "./features/templates/templateSlice"
export const store = configureStore({
     reducer: {
        common: commonSlice,
        template: templateSlice
     }
})