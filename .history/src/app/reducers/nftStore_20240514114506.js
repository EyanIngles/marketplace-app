import { createSlice } from '@reduxjs/toolkit';

export const nft = createSlice({
    name: 'nft',
    initialState: {
        nContract: 0,
        mintNft: 0,
        nftBalance: 0
    },
    reducers: {
        setNContract: (state, action) => {
            state.nContract = action.payload
        },
        setMintNft: (state, action) => {
            state.mintNft = action.payload
        },
        setNftBalance: (state, action) => {
            state.nftBalance = action.payload
        }
    }
})

export const { setNContract, setMintNft, setNftBalance } = nft.actions;

export default nft.reducer;