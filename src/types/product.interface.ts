export interface IProduct {
	id: number
	imageUrl: string
	title: string
	types: number[]
	sizes: number[]
	price: number
	category: number
	rating: number
}

export interface IProductCart {
	id: number
	title: string
	price: number
	imageUrl: string
	type: string
	size: number
	count: number
}

export interface ISearchProductParams {
	sortBy: string
	order: string
	category: string
	search: string
	currentPage: string
}
