import { configureStore } from '@reduxjs/toolkit'

import { products } from './product/productSlice'
import { filter } from './filter/filterSlice'
import { cart } from './cart/cartSlice'

export const store = configureStore({
	reducer: {
		products,
		filter,
		cart,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
