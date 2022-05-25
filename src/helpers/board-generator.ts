import { v4 } from 'uuid';

export type TCell = {
	id: string;
	isShown: boolean;
	hasBomb: boolean;
	row: number;
	column: number;
};

export const generateBoard = (
	rows: number = 5,
	columns: number = 5,
	bombs: number = 5
): TCell[] => {
	if (bombs >= rows * columns) {
		throw new Error('Number of bombs cannot exceed number of cells (rows x columns)');
	}

	const cells: TCell[] = [];
	const boardLength = rows * columns;

	const bombIndexes: number[] = [];

	// Pick random indices for the bombs, making sure that indices are unique
	while (bombIndexes.length < bombs) {
		let randomIndex = Math.floor(Math.random() * boardLength);

		if (!bombIndexes.includes(randomIndex)) {
			bombIndexes.push(randomIndex);
		}
	}

	// Create the cells and push them to the cells array
	// making sure to mark the indices with bombs
	// and calculate the rows and columns for later use
	for (let i = 0; i < boardLength; i++) {
		// Rows and columns are 0 indexed
		const cell: TCell = {
			id: v4(),
			isShown: false,
			hasBomb: bombIndexes.includes(i),
			row: Math.floor(i / columns),
			column: i % columns
		};

		cells.push(cell);
	}

	return cells;
};
