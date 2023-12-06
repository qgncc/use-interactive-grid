import { GridItem, Pos } from "hooks/useGrid";
import { Coords } from "types";

export interface InteractiveGridEvent {
	initialItemPos: Pos;
	draggedItem: GridItem;
	coords: Coords;
}
