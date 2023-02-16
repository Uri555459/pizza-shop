import { IProductCart } from '../../types/product.interface'

export interface ICartState {
	totalPrice: number
	products: IProductCart[]
}
