import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ButtonLink } from '../../components'

import styles from './NotFound.module.scss'

export const NotFound: FC = () => {
	return (
		<div className={styles.wrap}>
			<span className={styles.emoji}>😞</span>
			<h1 className={styles.title}>Страница не найдена</h1>
			<ButtonLink text='Вернуться на главную' url='/' />
		</div>
	)
}
