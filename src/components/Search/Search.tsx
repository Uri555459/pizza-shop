import { FC } from 'react'

import styles from './Search.module.scss'

const searchIcon = require('../../assets/img/search.svg').default

export const Search: FC = () => {
	return (
		<div className={styles.search}>
			<img className={styles.icon} src={searchIcon} alt='Search icon' />
			<input className={styles.input} placeholder='Поиск...' />
		</div>
	)
}
