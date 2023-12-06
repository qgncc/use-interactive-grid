/**
 * This function translates global coords to the local coords of the element
 *
 * @param {Coords} coords - window coords
 * @param {GridElementSize} gridElementSize - size of a grid element in pixels
 * @param {GridDimension} gridDimension - amount of rows and columns that grid has
 * @return {Pos} column and row of a cell that corresponds to the given coords
 *
 * @example
 * const coords: Coords = [34.56, 47.838];
 * const gridElementSize: GridElementSize = { height: 50, width: 50 };
 * const gridDimension: GridDimension = { rowAmount: 5, colAmount: 5 };
 * console.log(coordsToPos(coords, gridElementSize, gridDimension));
 * // Output [4, 5] column and row
 */

import { Coords } from "types";
import { getBorderWidth } from "./getBorderWidth";

export function globalCoordsToElementCoords(
	globalCoords: Coords,
	element: Element,
): Coords {
	const borderWidth = getBorderWidth(element);

	const rect = element.getBoundingClientRect();
	const [globalX, globalY] = globalCoords;
	const x = globalX - rect.x - borderWidth.left;
	const y = globalY - rect.y - borderWidth.top;
	return [x, y];
}
