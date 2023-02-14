import { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'

import { setCurrentPage } from '../../redux/filter/filterSlice'

import styles from './Pagination.module.scss'

interface IPaginationProps {
	currentPage: number
}

export const Pagination: FC<IPaginationProps> = ({ currentPage }) => {
	const dispatch = useDispatch()
	return (
		<ReactPaginate
			className={styles.pagination}
			breakLabel='...'
			previousLabel='<'
			nextLabel='>'
			onPageChange={event => dispatch(setCurrentPage(event.selected + 1))}
			pageRangeDisplayed={4}
			pageCount={3}
			forcePage={currentPage - 1}
		/>
	)
}
