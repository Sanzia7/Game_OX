import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const InformationContainer = ({ draw, win, currentPlayer }) => {
	const status = win
		? `Победил: ${currentPlayer} !!!`
		: draw
			? '= Ничья ='
			: `Ходит: ${currentPlayer}`;

	return <InformationLayout status={status} />;
};

InformationContainer.propTypes = {
	drw: PropTypes.string,
	win: PropTypes.string,
	currentPlayer: PropTypes.string,
};
