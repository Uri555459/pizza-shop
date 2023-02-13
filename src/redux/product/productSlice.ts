import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../Types/product.interface'

interface IState {
	items: IProduct[]
}

const initialState: IState = {
	items: [],
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
})

export const {} = productSlice.actions

export const product = productSlice.reducer
