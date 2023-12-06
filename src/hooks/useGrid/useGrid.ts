import { Pos } from "@useInteractiveGrid/types";
import { useCallback, useState } from "react";
import { Grid, GridItem } from ".";

export function useGrid(gridInit: Grid, rowNumber: number, colNumber: number) {
	const [grid, setGrid] = useState<Grid>(gridInit);
	const put = useCallback(
		(element: GridItem | null, pos: Pos) => {
			const [col, row] = pos;
			if (col < colNumber && row < rowNumber) {
				const newGrid = [...grid];
				newGrid[row][col] = element;
			}
		},
		[grid, setGrid],
	);
	const remove = useCallback(
		(pos: Pos) => {
			const [col, row] = pos;
			if (col < colNumber && row < rowNumber) {
				const newGrid = [...grid];
				newGrid[row][col] = null;
			}
		},
		[grid, setGrid],
	);
	const get = useCallback(
		(pos: Pos) => {
			console.log("grit.get", pos);
			const [col, row] = pos;

			if (col < colNumber && row < rowNumber && col >= 0 && row >= 0) {
				return grid[row][col];
			}
			return undefined;
		},
		[grid],
	);

	return { grid, put, remove, get };
}
