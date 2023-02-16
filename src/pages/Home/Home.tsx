import { FC, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

import { AppDispatch } from '../../redux/store'
import { setFilters } from '../../redux/filter/filterSlice'

import {
	Categories,
	Pagination,
	Product,
	ProductError,
	ProductSkeleton,
	SearchError,
	Sort,
} from '../../components'
import { sortLabelData } from '../../components/Sort/Sort'
import { fetchProducts } from '../../redux/product/asyncActions'
import { selectProduct } from '../../redux/product/selector'
import { selectFilter } from '../../redux/filter/selectors'

export const Home: FC = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const isSearch = useRef(false)
	const isMounted = useRef(false)

	const { products, status } = useSelector(selectProduct)
	const { categoryId, sort, currentPage, searchValue } =
		useSelector(selectFilter)

	const getProducts = async () => {
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
	}, [categoryId, currentPage, sort.sortProperty, searchValue])

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			{status === 'error' && <ProductError />}
			<div className='content__items'>
				{status === 'loading'
					? [...new Array(4)].map((_, index) => <ProductSkeleton key={index} />)
					: products.length > 0 &&
					  products.map(product => <Product key={product.id} {...product} />)}
			</div>
			{products.length === 0 && <SearchError />}
			{products.length > 0 && <Pagination currentPage={currentPage} />}
		</div>
	)
}
