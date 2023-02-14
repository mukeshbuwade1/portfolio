import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
    name: "project",
    initialState: false,
    reducers: {
        updateProjects: (state, action) => {
            return action.payload
        }
    }
})

export const {updateProjects} = projectSlice.actions

export default projectSlice.reducer