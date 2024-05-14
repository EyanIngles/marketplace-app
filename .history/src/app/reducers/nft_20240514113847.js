import { createSlice } from '@reduxjs/toolkit';

export const nft = createSlice({
    name: 'nft',
    initialState: {
        contract: 0,
        mintNft: 0,
        nftBalance: 0
    },
    reducers: {
        setContract: (state, action) => {
            state.contract = action.payload
        },
        setMintNft: (state, action) => {
            state.mintNft = action.payload
        },
        setNftBalance: (state, action) => {
            state.nftBalance = action.payload
        }
    }
})

export const { setContract, setMintNft, setNftBalance } = nft.actions;

export default nft.reducer;