import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../../types/product.interface'
import { fetchProducts } from './asyncActions'
import { IProductState } from './types'

const initialState: IProductState = {
	products: [],
	status: 'loading',
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
		builder.addCase(fetchProducts.pending, state => {
			state.status = 'loading'
			state.products = []
		})
		builder.addCase(
			fetchProducts.fulfilled,
			(state, action: PayloadAction<IProduct[]>) => {
				state.products = action.payload
				state.status = 'success'
			}
		)
		builder.addCase(fetchProducts.rejected, state => {
			state.products = []
			state.status = 'error'
		})
	},
})

export const { setProducts } = productsSlice.actions

export const products = productsSlice.reducer
