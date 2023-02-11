import { FC, ReactNode } from 'react'
import { Header } from '..'

interface ILayoutProps {
	children?: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
	return (
		<div className='wrapper'>
			<Header />
			{children}
		</div>
	)
}
