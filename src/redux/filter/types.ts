export enum SortPropertyEnum {
	RATING_DESC = 'rating',
	RATING_ASC = '-rating',
	TITLE_DESC = 'title',
	TITLE_ASC = '-title',
	PRICE_DESC = 'price',
	PRICE_ASC = '-price',
}

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
