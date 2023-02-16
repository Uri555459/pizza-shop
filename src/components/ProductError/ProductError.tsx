import { FC } from 'react'

export const ProductError: FC = () => {
	return (
		<div className='content__error-info'>
			<h2>Произошла ошибка 😞</h2>
			<p>
				К сожалению, не удалось получить продукты. Попробуйте повторить попытку
				позже.
			</p>
		</div>
	)
}
