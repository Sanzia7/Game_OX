import { GetPath } from '../../utils/getPath'
import style from './Field.module.css'


export const FieldLayout = ({ field, onClick }) => {
	return (
		<div className={style.field}>
			{field.map((cell, ind) => (
				<button key={ind} className={style.cell} onClick={() => onClick(ind)}>
					{cell && GetPath(cell)}
				</button>
			))}
		</div>
	)
}


