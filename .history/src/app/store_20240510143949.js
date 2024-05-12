import { configureStore } from '@reduxjs/toolkit'
import provider from './reducers/provider';

export default configureStore({
  reducer: {
    provider,
  }
})