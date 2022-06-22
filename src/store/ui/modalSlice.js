
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { toast } from 'react-toastify';

const initialState = {
    showModal: false,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggle: {
            reducer(state, action) {
                state.showModal = !state.showModal

            },
            prepare(user) {
                return {
                    payload: user
                }
            }

        }

    }



})

// Action creators are generated for each case reducer function
export const { toggle } = modalSlice.actions

export default modalSlice.reducer