import { InteractiveItem } from "entities";
import { Coords, Pos } from "types";
import { InteractiveGridEvent } from "./InteractiveGridEvent";

export class DragEndEvent<Item> implements InteractiveGridEvent<Item> {
	dragEndPos: Pos;
	coords: Coords;
	item: InteractiveItem<Item>;
	initialItemPos: Pos;
	constructor(
		dropPos: Pos,
		initialItemPos: Pos,
		coords: Coords,
		item: InteractiveItem<Item>,
	) {
		this.dragEndPos = dropPos;
		this.coords = coords;
		this.item = item;
		this.initialItemPos = initialItemPos;
	}
}
