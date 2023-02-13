import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCategoryId } from '../../redux/filter/filterSlice'
import { RootState } from '../../redux/store'

const categoryArray: string[] = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]

export const Categories: FC = () => {
	const categoryId = useSelector((state: RootState) => state.filter.categoryId)
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
}
