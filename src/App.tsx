import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components'
import { Cart, Home, NotFound, Single } from './pages'

import './assets/scss/app.scss'

export const App: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path=':id' element={<Single />} />
				<Route path='*' element={<NotFound />} />
			</Route>
		</Routes>
	)
}
