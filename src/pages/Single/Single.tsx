import { FC, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { instanceAxios } from '../../helpers/helpers'
import { IProduct } from '../../types/product.interface'

import styles from './Single.module.scss'

export const Single: FC = () => {
	const [product, setProduct] = useState<IProduct[]>([])
	const id = useParams().id

	useEffect(() => {
		async function fetchProduct() {
			try {
				const { data } = await instanceAxios(`?id=${id}`)
				setProduct(data)
			} catch (error: any) {
				console.error(error)
			}
		}
		fetchProduct()
	}, [id])

	if (product.length === 0) return null
	const { title, imageUrl, price } = product[0]

	return (
		<div className='container'>
			<div className={styles.single}>
				<img src={imageUrl} alt={title} />
				<h2>{title}</h2>
				<p>{price} ₽</p>
				<Link to='/'>
					<button className='button button--outline button--add'>
						<span>Назад</span>
					</button>
				</Link>
			</div>
		</div>
	)
}
