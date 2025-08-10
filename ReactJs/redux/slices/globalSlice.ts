import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GlobalState = {
    number: number,
    string: string
}

const initialState: GlobalState = {
    number: 0,
    string: 'TEST',
}

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setAll: (state, action: PayloadAction<GlobalState>) => {
            return { ...action.payload }
        },
        updatePartial: (state, action: PayloadAction<Partial<GlobalState>>) => {
            Object.assign(state, action.payload)
        },
        reset: () => initialState,
    },
})

export const { setAll, updatePartial, reset } = globalSlice.actions
export default globalSlice.reducer

