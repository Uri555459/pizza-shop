import axios from 'axios'
import { IProductCart } from '../types/product.interface'

export const instanceAxios = axios.create({
	baseURL: 'https://63e792ceac3920ad5be00e6e.mockapi.io/products',
})

export const getCartFromLocalStorage = () => {
	const data = localStorage.getItem('cart')
	const products = data ? JSON.parse(data) : []
	const totalPrice = calcTotalPrice(products)

	return { products, totalPrice }
}

export const calcTotalPrice = (products: IProductCart[]) => {
	return products.reduce((sum, obj) => {
		return obj.price * obj.count + sum
	}, 0)
}
