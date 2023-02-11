import { FC, useState } from 'react'

const categoryArray: string[] = [
	'Все',
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]

export const Categories: FC = () => {
	const [activeCategory, setActiveCategory] = useState<number>(0)

	const categoryHandler = (index: number) => {
		setActiveCategory(index)
	}

	return (
		<div className='categories'>
			<ul>
				{categoryArray.map((category, index) => (
					<li
						key={category}
						className={activeCategory === index ? 'active' : ''}
						onClick={() => categoryHandler(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	)
}
