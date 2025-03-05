import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setItems } from '../store/shoppingSlice';
import { RootState } from '../store/store';
import { ShoppingItem } from '../types';

/**
 * Custom hook for managing undo and redo functionality for the shopping list.
 */
export const useUndoRedo = () => {
	const dispatch = useDispatch();
	const items = useSelector((state: RootState) => state.shopping.items);
	const [history, setHistory] = useState<ShoppingItem[][]>([]);
	const [position, setPosition] = useState<number>(-1);

	/**
	 * Records the current state of the shopping list.
	 * @param items - The current list of shopping items.
	 */
	const recordState = useCallback(
		(items: ShoppingItem[]) => {
			const currentState = JSON.stringify(items);
			const previousState =
				position >= 0 ? JSON.stringify(history[position]) : '';
			if (currentState === previousState) return;
			const newHistory = [
				...history.slice(0, position + 1),
				JSON.parse(currentState),
			];
			setHistory(newHistory);
			setPosition(newHistory.length - 1);
		},
		[history, position],
	);

	/**
	 * Determines if undo is possible.
	 */
	const canUndo = position > 0;

	/**
	 * Performs the undo action.
	 */
	const undo = useCallback(() => {
		if (!canUndo) return;
		const newPosition = position - 1;
		setPosition(newPosition);
		dispatch(setItems(history[newPosition]));
	}, [position, history, dispatch, canUndo]);

	/**
	 * Determines if redo is possible.
	 */
	const canRedo = position < history.length - 1;

	/**
	 * Performs the redo action.
	 */
	const redo = useCallback(() => {
		if (!canRedo) return;
		const newPosition = position + 1;
		setPosition(newPosition);
		dispatch(setItems(history[newPosition]));
	}, [position, history, dispatch, canRedo]);

	return { recordState, undo, redo, canUndo, canRedo };
};
