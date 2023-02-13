import { FC, useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

import { IMyContext, MyContext } from '../../App'

import {
	Categories,
	Pagination,
	Product,
	ProductSkeleton,
	Sort,
} from '../../components'
import { instanceAxios } from '../../helpers/helpers'

import { IProduct } from '../../Types/product.interface'

export const Home: FC = () => {
	const [products, setProducts] = useState<IProduct[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [currentPage, setCurrentPage] = useState<number>(1)
	const itemsPerPage = 4

	const { searchValue } = useContext(MyContext) as IMyContext

	const { categoryId, sort } = useSelector((state: RootState) => state.filter)

	useEffect(() => {
		setLoading(true)

		// Query parameters
		const category = categoryId > 0 ? `category=${categoryId}` : ''
		const sortBy = sort.sortProperty.replace('-', '')
		const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
		const search = searchValue ? `&search=${searchValue}` : ''

		// Query
		instanceAxios
			.get<IProduct[]>(
				`/products?page=${currentPage}&limit=${itemsPerPage}&${category}&sortBy=${sortBy}&order=${order}${search}`
			)
			.then(({ data }) => setProducts(data))
		// FIXME: Delete setTimeout (Fake delay response server)
		setTimeout(() => setLoading(false), 1000)
	}, [categoryId, sort.sortProperty, searchValue, currentPage])

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
						? [...new Array(4)].map((_, index) => (
								<ProductSkeleton key={index} />
						  ))
						: products.map(product => (
								<Product key={product.id} {...product} />
						  ))}
				</div>
				<Pagination
					onChangePageHandler={pageIndex => setCurrentPage(pageIndex)}
				/>
			</div>
		</div>
	)
}
