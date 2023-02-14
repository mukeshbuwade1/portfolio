import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
    name: "resume",
    initialState: false,
    reducers: {
        updateResumeData: (state, action) => {
            console.log("redux", action.payload)
            return action.payload
        }
    }
})

export const {updateResumeData} = resumeSlice.actions

export default resumeSlice.reducer