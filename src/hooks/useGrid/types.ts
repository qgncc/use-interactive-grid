export type GridItem = { data: any; id: number | string };
/**
 * Grid. First index is a row, second is a column.
 * @example
 * const grid: Grid = [
 * 		[GridItem,GridItem,GridItem],
 * 		[GridItem,GridItem,GridItem],
 * 		[GridItem,GridItem,GridItem],
 * ]
 * const gridElementSize: GridItemSize = { height: 50, width: 50 };
 * const gridDimension: GridDimension = { rowAmount: 5, colAmount: 5 };
 * console.log(coordsToPos(coords, gridElementSize, gridDimension));
 * // Output [4, 5] column and row
 */

export type Grid = Array<Array<GridItem | null>>;
export type GridInit = Array<Array<GridItem | null>>;

/**
 * First number is amount of columns, second — amount of rows
 * @type {[number, number]}
 */
export type GridDimension = [number, number];
