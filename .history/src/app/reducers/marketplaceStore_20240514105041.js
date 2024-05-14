import { createSlice } from '@reduxjs/toolkit';

export const marketplace = createSlice({
    name: 'marketplace',
    initialState: {
        contract: 0,
        chainId: null,
        account: null
    },
    reducers: {
        setContract: (state, action) => {
            state.contract = action.payload
        },
        setAccount: (state, action) => {
            state.account = action.payload
        },
        setProvider: (state, action) => {
            state.connection = action.payload
        }
    }
})

export const { setContract, setAccount, setProvider } = marketplace.actions;

export default marketplace.reducer;