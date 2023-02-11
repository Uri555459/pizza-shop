import { FC } from 'react'
import { Link } from 'react-router-dom'

import styles from './ButtonLink.module.scss'

interface IButtonLink {
	text: string
	url: string
}

export const ButtonLink: FC<IButtonLink> = ({ text, url }) => {
	return (
		<Link className={styles['button-link']} to={url}>
			{text}
		</Link>
	)
}
