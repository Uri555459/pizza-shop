import { IProduct } from '../../types/product.interface'

export interface IProductState {
	products: IProduct[]
	status: 'loading' | 'success' | 'error'
}
