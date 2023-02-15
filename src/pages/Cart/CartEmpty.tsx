import { FC } from 'react'

import { ButtonLink } from '../../components'

import emptyCartImage from '../../assets/img/empty-cart.png'

export const CartEmpty: FC = () => {
	return (
		<div className='content'>
			<div className='container container--cart'>
				<div className='cart cart--empty'>
					<h2>
						Корзина пустая <span>😕</span>
					</h2>
					<p>
						Вероятней всего, вы не заказывали ещё пиццу.
						<br />
						Для того, чтобы заказать пиццу, перейди на главную страницу.
					</p>
					<img src={emptyCartImage} alt='Empty cart' />
					<ButtonLink text='Вернуться на главную' url='/' />
				</div>
			</div>
		</div>
	)
}
