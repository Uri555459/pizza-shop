export interface ISort {
	name: string
	sortProperty: string
}

export interface IFilterState {
	categoryId: number
	currentPage: number
	searchValue: string
	sort: ISort
}
