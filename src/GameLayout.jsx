import PropTypes from 'prop-types'
import { FieldContainer, InformationContainer } from './components'
import style from './Game.module.css'

export const GameLayout = ({ props }) => {
	const { field, currentPlayer, win, draw, handleReset, handleClick } = props

	return (
		<div className={style.container}>
			<div className={style.game}>
				<InformationContainer
					currentPlayer={currentPlayer}
					draw={draw}
					win={win}
				/>
				<FieldContainer
					field={field}
					onClick={handleClick}
				/>
				<button
					className={style.reset}
					onClick={handleReset}
				>
					Начать заново ...
				</button>
			</div>
		</div>
	)
}

GameLayout.propTypes = {
	field: PropTypes.array,
	currentPlayer: PropTypes.string,
	win: PropTypes.string,
	draw: PropTypes.string,
	handleReset: PropTypes.func,
	handleClick: PropTypes.func,
}
