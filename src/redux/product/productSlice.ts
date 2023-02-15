import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.interface'
import { fetchProducts } from './asincActions'

interface IProductState {
	products: IProduct[]
}

const initialState: IProductState = {
	products: [],
}

const productsSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(
			fetchProducts.fulfilled,
			(state, action: PayloadAction<IProduct[]>) => {
				state.products = action.payload
			}
		)
	},
})

export const { setProducts } = productsSlice.actions

export const products = productsSlice.reducer
