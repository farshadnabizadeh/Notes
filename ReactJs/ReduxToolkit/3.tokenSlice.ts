import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { TokenState, SetTokenPayload } from '@/types/api'

const initialState: TokenState = {
    accessToken: null,
    refreshToken: null,
    expiration: null,
    userId: null
}

const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<SetTokenPayload>) => {
            state.accessToken = action.payload.accessToken
            state.refreshToken = action.payload.refreshToken
            state.expiration = action.payload.expiration
            state.userId = action.payload.userId
        },
        clearToken: (state) => {
            state.accessToken = null
            state.refreshToken = null
            state.expiration = null
            state.userId = null
        }
    }
})

export const { setToken, clearToken } = tokenSlice.actions
export default tokenSlice.reducer
