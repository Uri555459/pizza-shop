import { FC, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { instanceAxios } from '../../helpers/helpers'
import { IProduct } from '../../types/product.interface'

import styles from './Single.module.scss'

export const Single: FC = () => {
	const [product, setProduct] = useState<IProduct>()
	const navigate = useNavigate()
	const id = useParams().id

	useEffect(() => {
		async function fetchProduct() {
			try {
				const { data } = await instanceAxios(`?id=${id}`)
				setProduct(data[0])
			} catch (error: any) {
				alert('Продукт не найден')
				navigate('/')
			}
		}
		fetchProduct()
	}, [])

	return (
		<div className='container'>
			{product && (
				<div className={styles.single}>
					<img src={product.imageUrl} alt={product.title} />
					<h2>{product.title}</h2>
					<p>{product.price} ₽</p>
					<Link to='/'>
						<button className='button button--outline button--add'>
							<span>Назад</span>
						</button>
					</Link>
				</div>
			)}
		</div>
	)
}
