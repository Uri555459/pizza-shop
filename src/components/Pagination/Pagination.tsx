import { FC } from 'react'
import ReactPaginate from 'react-paginate'

import styles from './Pagination.module.scss'

interface IPaginationProps {
	onChangePageHandler: (pageIndex: number) => void
}

export const Pagination: FC<IPaginationProps> = ({ onChangePageHandler }) => {
	return (
		<ReactPaginate
			className={styles.pagination}
			breakLabel='...'
			previousLabel='<'
			nextLabel='>'
			onPageChange={event => onChangePageHandler(event.selected + 1)}
			pageRangeDisplayed={4}
			pageCount={3}
			// renderOnZeroPageCount={null}
		/>
	)
}
