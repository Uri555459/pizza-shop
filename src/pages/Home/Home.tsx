import { FC } from 'react'

import { Category, Product, Sort } from '../../components'

export const Home: FC = () => {
	return (
		<div className='content'>
			<div className='container'>
				<div className='content__top'>
					<Category />
					<Sort />
				</div>
				<h2 className='content__title'>Все пиццы</h2>
				<div className='content__items'>
					<Product />
				</div>
			</div>
		</div>
	)
}
