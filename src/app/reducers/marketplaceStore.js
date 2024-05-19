import { createSlice } from '@reduxjs/toolkit';

export const marketplace = createSlice({
    name: 'marketplace',
    initialState: {
        contract: 0,
        listNFT: [],
        buyNFT: []
    },
    reducers: {
        setContract: (state, action) => {
            state.contract = action.payload
        },
        setListNFT: (state, action) => {
            state.listNFT = action.payload
        },
        setBuyNFT: (state, action) => {
            state.buyNFT = action.payload
        }
    }
})

export const { setContract, setListNFT, setBuyNFT } = marketplace.actions;

export default marketplace.reducer;