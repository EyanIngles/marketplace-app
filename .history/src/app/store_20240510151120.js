import { configureStore } from '@reduxjs/toolkit'
import { ethers } from 'ethers';

import provider from './reducers/provider';

export default configureStore({
  reducer: {
    provider,
  }
})