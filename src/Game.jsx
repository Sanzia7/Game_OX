import { useState } from 'react'
import { GameLayout } from './GameLayout'
import { field as initilalField } from './utils/field'
import * as check from './utils/check'

export const Game = () => {
	const [field, setField] = useState(initilalField)
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [win, setWin] = useState(false)
	const [draw, setDraw] = useState(false)

	const handleClick = (index) => {
		if (field[index] || win || draw) return

		const newField = field.map((cell, indx) => (indx === index ? currentPlayer : cell))

		setField(newField)

		if (check.isWin(newField, currentPlayer)) {
			setWin(true)
			return
		}
		if (check.isDraw(newField)) {
			setDraw(true)
			return
		}

		setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'))
	}

	const handleReset = () => {
		setField(initilalField)
		setWin(false)
		setDraw(false)
		setCurrentPlayer('X')
	}

	return (
		<GameLayout props={{ field, currentPlayer, win, draw, handleReset, handleClick }} />
	)
}
