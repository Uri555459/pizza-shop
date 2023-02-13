import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {},
})

export const {} = filterSlice.actions

export const filter = filterSlice.reducer
