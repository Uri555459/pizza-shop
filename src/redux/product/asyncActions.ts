import { createAsyncThunk } from '@reduxjs/toolkit'
import { instanceAxios } from '../../utils/utils'
import { IProduct, ISearchProductParams } from '../../types/product.interface'

const itemsPerPage = 4

export const fetchProducts = createAsyncThunk<IProduct[], ISearchProductParams>(
	'products/fetchProductsStatus',
	async (params, thunkAPI) => {
		const { category, sortBy, order, search, currentPage } = params

		const { data } = await instanceAxios.get<IProduct[]>(
			`?page=${currentPage}
			&limit=${itemsPerPage}&${category}
			&sortBy=${sortBy}
			&order=${order}${search}`
		)

		return data
	}
)
