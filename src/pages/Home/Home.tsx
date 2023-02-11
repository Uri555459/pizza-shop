import { FC, useEffect, useState } from 'react'

import { Categories, Product, ProductSkeleton, Sort } from '../../components'
import { instanceAxios } from '../../helpers/helpers'
import { IProduct } from '../../Types/product.interface'

export const Home: FC = () => {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState<boolean>(true)

	useEffect(() => {
		instanceAxios
			.get<IProduct[]>('/products')
			.then(({ data }) => setProducts(data))

		// FIXME: fixed on production
		setTimeout(() => setLoading(false), 1000)
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
					{loading
						? [...new Array(6)].map((_, index) => (
								<ProductSkeleton key={index} />
						  ))
						: products.map(product => (
								<Product key={product.id} {...product} />
						  ))}
				</div>
			</div>
		</div>
	)
}
