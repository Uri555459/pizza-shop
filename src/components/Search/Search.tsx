import { FC, useRef, ChangeEvent, useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import debounce from 'lodash.debounce'

import { setSearchValue } from '../../redux/filter/filterSlice'

import styles from './Search.module.scss'

import searchIcon from '../../assets/img/search.svg'
import clearIcon from '../../assets/img/close.svg'

export const Search: FC = () => {
	const [value, setValue] = useState<string>('')
	const dispatch = useDispatch()
	const inputRef = useRef<HTMLInputElement>(null)

	const clearSearchValue = () => {
		setValue('')
		dispatch(setSearchValue(''))
		inputRef.current?.focus()
	}

	const debounceHandler = useCallback(
		debounce((str: string) => {
			dispatch(setSearchValue(str))
		}, 300),
		[]
	)

	const searchInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
		debounceHandler(event.target.value)
	}

	return (
		<div className={styles.search}>
			<img className={styles.icon} src={searchIcon} alt='Search icon' />
			<input
				className={styles.input}
				placeholder='Поиск...'
				value={value}
				onChange={searchInputHandler}
				ref={inputRef}
			/>
			{value && (
				<img
					className={styles.clearIcon}
					src={clearIcon}
					alt='Close icon'
					onClick={clearSearchValue}
				/>
			)}
		</div>
	)
}
