// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// Import all your slices
import tokenReducer from './tokenSlice'
import ErrorMessageReducer from './errorSlice'
import WalletSliceReducer from './walletSlice'

// Create persist config for each reducer
const tokenPersistConfig = {
    key: 'token',
    storage,
}

const errorPersistConfig = {
    key: 'ErrorMessage',
    storage,
}

const walletPersistConfig = {
    key: 'WalletSlice',
    storage,
}

// Apply persistReducer to each slice
const persistedTokenReducer = persistReducer(tokenPersistConfig, tokenReducer)
const persistedErrorReducer = persistReducer(errorPersistConfig, ErrorMessageReducer)
const persistedWalletReducer = persistReducer(walletPersistConfig, WalletSliceReducer)

export const store = configureStore({
    reducer: {
        token: persistedTokenReducer,
        ErrorMessage: persistedErrorReducer,
        WalletSlice: persistedWalletReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store)

// Define RootState interface explicitly
export interface RootState {
    token: {
        accessToken: string | null
        refreshToken: string | null
        expiration: number | null
        userId: number | null
    }
    ErrorMessage: {
        message: string | null
        statusCode: number | null
    }
    WalletSlice: {
        id: number
        amountRemain: number
        currencyTypeEn: string
        tokenId: number
        PaymentCallbackData: any[]
    }
}

export type AppDispatch = typeof store.dispatch