import { FC, useEffect, useState } from 'react'

import { Categories, Product, ProductSkeleton, Sort } from '../../components'
import { instanceAxios } from '../../helpers/helpers'
import { IProduct } from '../../Types/product.interface'

export const Home: FC = () => {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [categoryId, setCategoryId] = useState<number>(0)
	const [sortType, setSortType] = useState<{
		name: string
		sortProperty: string
	}>({
		name: 'популярности',
		sortProperty: 'rating',
	})

	useEffect(() => {
		setLoading(true)

		const category = categoryId > 0 ? `category=${categoryId}` : ''
		const sortBy = sortType.sortProperty.replace('-', '')
		const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc'

		instanceAxios
			.get<IProduct[]>(`/products?${category}&sortBy=${sortBy}&order=${order}`)
			.then(({ data }) => setProducts(data))
		// FIXME: Delete setTimeout
		setTimeout(() => setLoading(false), 1000)
	}, [categoryId, sortType])

	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<Categories categoryId={categoryId} setCategoryId={setCategoryId} />
					<Sort sortType={sortType} setSortType={setSortType} />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>
					{loading
						? [...new Array(4)].map((_, index) => (
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
