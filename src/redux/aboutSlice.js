import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
    name: "about",
    initialState: false,
    reducers: {
        updateAbout: (state, action) => {
            console.log("state", action)
            return action.payload
        }
    }
})

export const {updateAbout} = aboutSlice.actions

export default aboutSlice.reducer