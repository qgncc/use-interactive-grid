import { InteractiveItem } from "entities";
import { GridItem, Pos } from "hooks/useGrid";
import { Coords } from "types";

export interface InteractiveGridEvent<Item> {
	initialItemPos: Pos;
	item: InteractiveItem<Item>;
	coords: Coords;
}
