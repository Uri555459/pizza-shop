import { FC } from 'react'
import { Link } from 'react-router-dom'

const logoImage = require('../../assets/img/pizza-logo.svg').default

export const Logo: FC = () => {
	return (
		<Link to='/' className='header__logo'>
			<img width='38' src={logoImage} alt='Pizza logo' />
			<div>
				<h1>React Pizza</h1>
				<p>самая вкусная пицца во вселенной</p>
			</div>
		</Link>
	)
}
