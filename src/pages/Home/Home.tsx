import { FC, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { AppDispatch, RootState } from '../../redux/store'
import { setFilters } from '../../redux/filter/filterSlice'

import {
	Categories,
	Pagination,
	Product,
	ProductSkeleton,
	Sort,
} from '../../components'
import { sortLabelData } from '../../components/Sort/Sort'
import { fetchProducts } from '../../redux/product/asincActions'

export const Home: FC = () => {
	const [loading, setLoading] = useState<boolean>(true)
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const isSearch = useRef(false)
	const isMounted = useRef(false)

	const { categoryId, sort, currentPage, searchValue } = useSelector(
		(state: RootState) => state.filter
	)

	const { products } = useSelector((state: RootState) => state.products)

	const getProducts = async () => {
		try {
			setLoading(true)

			// Query parameters
			const category = categoryId > 0 ? `category=${categoryId}` : ''
			const sortBy = sort.sortProperty.replace('-', '')
			const order = sort.sortProperty.includes('-') ? 'asc' : 'desc'
			const search = searchValue ? `&search=${searchValue}` : ''

			// Query
			dispatch(
				fetchProducts({
					category,
					sortBy,
					order,
					search,
					currentPage: String(currentPage),
				})
			)
		} catch (error: any) {
			console.error(new Error('Ошибка запроса на сервер'), error.message)
		} finally {
			setLoading(false)
		}
	}

	// Если изменили параметры и был первый рендер
	useEffect(() => {
		if (isMounted.current) {
			const queryString = qs.stringify({
				sortProperty: sort.sortProperty,
				categoryId,
				currentPage,
			})
			navigate(`?${queryString}`)
		}

		isMounted.current = true
	}, [categoryId, currentPage, navigate, sort.sortProperty])

	// Если был первый рендер, то проверяем URL-параметры и сохраняем в redux
	useEffect(() => {
		if (window.location.search) {
			const params = qs.parse(window.location.search.substring(1))
			const sort = sortLabelData.find(
				obj => obj.sortProperty === params.sortProperty
			)
			dispatch(setFilters({ ...params, sort }))
			isSearch.current = true
		}
	}, [dispatch])

	// Если был первый рендер, то запрашиваем продукты
	useEffect(() => {
		window.scrollTo(0, 0)
		if (!isSearch.current) {
			getProducts()
		}
		isSearch.current = false
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
				<Pagination currentPage={currentPage} />
			</div>
		</div>
	)
}
