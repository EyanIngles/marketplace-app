import { configureStore } from '@reduxjs/toolkit'
import provider from '../reducers/provider'
import marketplace from '../reducers/marketplaceStore'
import nft from '../reducers/nftStore'

export default configureStore({
  reducer: {
    provider,
    marketplace,
    nft
  },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false
    })
})