import { createContext, FC, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Layout } from './components'
import { Cart, Home, NotFound } from './pages'

import './assets/scss/app.scss'

export interface IMyContext {
	searchValue: string
	setSearchValue: (value: string) => void
}

export const MyContext = createContext<IMyContext | null>(null)

export const App: FC = () => {
	return (
		<div className='App'>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Layout>
		</div>
	)
}
