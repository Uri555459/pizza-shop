import { FC, useContext } from 'react'
import { IMyContext, MyContext } from '../../App'

import styles from './Search.module.scss'

const searchIcon = require('../../assets/img/search.svg').default
const clearIcon = require('../../assets/img/close.svg').default

export const Search: FC = () => {
	const { searchValue, setSearchValue } = useContext(MyContext) as IMyContext

	return (
		<div className={styles.search}>
			<img className={styles.icon} src={searchIcon} alt='Search icon' />
			<input
				className={styles.input}
				placeholder='Поиск...'
				value={searchValue}
				onChange={event => setSearchValue(event.target.value)}
			/>
			{searchValue && (
				<img
					className={styles.clearIcon}
					src={clearIcon}
					alt='Close icon'
					onClick={() => setSearchValue('')}
				/>
			)}
		</div>
	)
}
