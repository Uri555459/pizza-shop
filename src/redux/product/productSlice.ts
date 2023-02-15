import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { instanceAxios } from '../../helpers/helpers'
import { IProduct, ISearchProductParams } from '../../types/product.interface'

interface IProductState {
	products: IProduct[]
}

const initialState: IProductState = {
	products: [],
}

const itemsPerPage = 4

export const fetchProducts = createAsyncThunk<IProduct[], ISearchProductParams>(
	'products/fetchProductsStatus',
	async params => {
		const { category, sortBy, order, search, currentPage } = params
		const { data } = await instanceAxios.get<IProduct[]>(
			`/products?page=${currentPage}
			&limit=${itemsPerPage}&${category}
			&sortBy=${sortBy}
			&order=${order}${search}`
		)

		return data
	}
)

const productsSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchProducts.fulfilled, (state, action) => {
			state.products = action.payload
		})
	},
})

export const { setProducts } = productsSlice.actions

export const products = productsSlice.reducer
