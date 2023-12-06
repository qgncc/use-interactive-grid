import { Pos } from "hooks/useGrid";
import { Coords } from "types";

type GridElementSize = { height: number; width: number };

type GridDimension = { rowNumber: number; colNumber: number };

/**
 * This function translate given grid coords of an element to row and column
 *
 * @param {Coords} coords - coords inside of a grid element in pixels
 * @param {GridElementSize} gridElementSize - size of a grid element in pixels
 * @param {GridDimension} gridDimension - amount of rows and columns that grid has
 * @return {Pos} column and row of a cell that corresponds to the given coords
 *
 * @example
 * const coords: Coords = [34.56, 47.838];
 * const gridElementSize: GridElementSize = { height: 50, width: 50 };
 * const gridDimension: GridDimension = { rowNumber: 5, colNumber: 5 };
 * console.log(coordsToPos(coords, gridElementSize, gridDimension));
 * // Output [4, 5] column and row
 */
export function coordsToPos(
	coords: Coords,
	gridElementSize: GridElementSize,
	gridDimension: GridDimension,
): Pos {
	const { width, height } = gridElementSize;
	const { rowNumber, colNumber } = gridDimension;
	const [x, y] = coords;
	const colWidth = width / colNumber;
	const rowWidth = height / rowNumber;
	const col = Math.floor(x / colWidth);
	const row = Math.floor(y / rowWidth);
	return [col, row];
}
