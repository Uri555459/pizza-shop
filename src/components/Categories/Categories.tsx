import { FC } from 'react'

const categoryArray: string[] = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]

interface ICategoryProps {
	categoryId: number
	setCategoryId: (index: number) => void
}

export const Categories: FC<ICategoryProps> = ({
	categoryId,
	setCategoryId,
}) => {
	return (
		<div className='categories'>
			<ul>
				{categoryArray.map((categoryName, index) => (
					<li
						key={categoryName}
						className={categoryId === index ? 'active' : ''}
						onClick={() => setCategoryId(index)}
					>
						{categoryName}
					</li>
				))}
			</ul>
		</div>
	)
}
