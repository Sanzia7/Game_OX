import { InformationLayout } from './InformationLayout'

export const InformationContainer = ({ draw, win, currentPlayer }) => {
	const status = win
		? `Победил: ${currentPlayer} !!!`
		: draw
			? '= Ничья ='
			: `Ходит: ${currentPlayer}`

	return <InformationLayout status={status} />
}





