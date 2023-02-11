import axios from 'axios'
import { FC, useEffect, useState } from 'react'

import { Categories, Product, Sort } from '../../components'
import { instanceAxios } from '../../helpers/helpers'
import { IProduct } from '../../Types/product.interface'

export const Home: FC = () => {
	const [products, setProducts] = useState<IProduct[]>([])

	useEffect(() => {
		instanceAxios
			.get<IProduct[]>('/products')
			.then(({ data }) => setProducts(data))
	}, [])

	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<Categories />
					<Sort />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>
					{products.map(product => (
						<Product key={product.id} {...product} />
					))}
				</div>
			</div>
		</div>
	)
}
