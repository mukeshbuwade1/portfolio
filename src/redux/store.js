import {configureStore} from "@reduxjs/toolkit";
import aboutSlice from "./aboutSlice";
import projectSlice from "./projectSlice";
import resumeSlice from "./resumeSlice";

export const store = configureStore({
    reducer:{
        projects:projectSlice,
        resume:resumeSlice,
        about:aboutSlice,
    }
})