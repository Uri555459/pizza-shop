import { FC } from 'react'

export const SearchError: FC = () => {
	return (
		<div className='content__error-info'>
			<h2>Ничего не найдено 😞</h2>
			<p>Попробуйте изменить запрос поиска!</p>
		</div>
	)
}
