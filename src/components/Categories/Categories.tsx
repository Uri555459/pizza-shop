import { FC, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoryId } from '../../redux/filter/filterSlice'
import { selectFilter } from '../../redux/filter/selectors'

const categoryArray: string[] = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]

export const Categories: FC = memo(() => {
	const { categoryId } = useSelector(selectFilter)
	const dispatch = useDispatch()

	return (
		<div className='categories'>
			<ul>
				{categoryArray.map((categoryName, index) => (
					<li
						key={categoryName}
						className={categoryId === index ? 'active' : ''}
						onClick={() => dispatch(setCategoryId(index))}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	)
})
