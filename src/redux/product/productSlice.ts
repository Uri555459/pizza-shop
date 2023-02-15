import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.interface'

interface IState {
	products: IProduct[]
}

const initialState: IState = {
	products: [],
}

const productsSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
})

export const {} = productsSlice.actions

export const products = productsSlice.reducer
