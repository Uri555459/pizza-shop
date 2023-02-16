import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProductCart } from '../../types/product.interface'
import { ICartState } from './types'

const initialState: ICartState = {
	totalPrice: 0,
	products: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<IProductCart>) => {
			const findProduct = state.products.find(
				obj => obj.id === action.payload.id
			)

			if (findProduct) {
				findProduct.count++
			} else {
				state.products.push({ ...action.payload })
			}

			state.totalPrice = state.products.reduce((sum, obj) => {
				return obj.price * obj.count + sum
			}, 0)
		},

		minusProduct: (state, action: PayloadAction<number>) => {
			const findProduct = state.products.find(obj => obj.id === action.payload)

			if (findProduct) {
				findProduct.count--
			}

			state.totalPrice = state.products.reduce((sum, obj) => {
				return obj.price * obj.count + sum
			}, 0)
		},

		removeProduct: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(obj => obj.id !== action.payload)

			state.totalPrice = state.products.reduce((sum, obj) => {
				return obj.price * obj.count + sum
			}, 0)
		},

		clearProducts: state => {
			state.products = []
			state.totalPrice = 0
		},
	},
})

export const { addProduct, removeProduct, clearProducts, minusProduct } =
	cartSlice.actions

export const cart = cartSlice.reducer
