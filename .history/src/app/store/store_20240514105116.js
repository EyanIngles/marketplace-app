import { configureStore } from '@reduxjs/toolkit'
import provider from '../reducers/provider'
import marketplace from '../reducers/marketplaceStore'

export default configureStore({
  reducer: {
    provider,
    marketplace,
  },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false
    })
})