import { createSlice } from '@reduxjs/toolkit';

export const marketplace = createSlice({
    name: 'marketplace',
    initialState: {
        contract: 0,
        listNFT: null,
        account: null
    },
    reducers: {
        setContract: (state, action) => {
            state.contract = action.payload
        },
        setListNFT: (state, action) => {
            state.listNFT = action.payload
        },
        setProvider: (state, action) => {
            state.connection = action.payload
        }
    }
})

export const { setContract, setListNFT, setProvider } = marketplace.actions;

export default marketplace.reducer;