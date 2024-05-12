import { configureStore } from "@reduxjs/toolkit";



export const store = configureStore({
    reducer: {
        provider
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: false
    })
})