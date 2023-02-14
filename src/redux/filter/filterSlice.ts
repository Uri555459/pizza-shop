import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ISort {
	name: string
	sortProperty: string
}

interface IFilterState {
	categoryId: number
	currentPage: number
	searchValue: string
	sort: ISort
}

const initialState: IFilterState = {
	categoryId: 0,
	currentPage: 1,
	searchValue: '',
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
		setCurrentPage: (state, action: PayloadAction<number>) => {
			state.currentPage = action.payload
		},
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload
		},
		setFilters: (state, action: PayloadAction<any>) => {
			state.sort = action.payload.sort
			state.currentPage = Number(action.payload.currentPage)
			state.categoryId = Number(action.payload.categoryId)
		},
	},
})

export const {
	setCategoryId,
	setSort,
	setCurrentPage,
	setSearchValue,
	setFilters,
} = filterSlice.actions

export const filter = filterSlice.reducer
