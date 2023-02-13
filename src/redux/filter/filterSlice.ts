import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISort {
	name: string
	sortProperty: string
}

interface IFilterState {
	categoryId: number
	sort: {
		name: string
		sortProperty: string
	}
}

const initialState: IFilterState = {
	categoryId: 0,
	sort: {
		name: 'популярности',
		sortProperty: 'rating',
	},
}

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId: (state, action: PayloadAction<number>) => {
			state.categoryId = action.payload
		},
		setSort: (state, action: PayloadAction<ISort>) => {
			state.sort = action.payload
		},
	},
})

export const { setCategoryId, setSort } = filterSlice.actions

export const filter = filterSlice.reducer
