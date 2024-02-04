import { GetPath } from '../../utils/get-path'
import style from './Field.module.css'

export const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={style.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={style.cell}
					onClick={() => onClick(index)}
				>
					{cell && GetPath(cell)}
				</button>
			))}
		</div>
	)
}
