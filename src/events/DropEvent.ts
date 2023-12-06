import { GridItem, Pos } from "hooks/useGrid";
import { Coords } from "types";
import { InteractiveGridEvent } from "./InteractiveGridEvent";

export class DropEvent<H extends HTMLElement> implements InteractiveGridEvent {
	dropPos: Pos;
	coords: Coords;
	draggedItem: GridItem;
	initialItemPos: Pos;
	html: H | null;
	constructor(
		dropPos: Pos,
		initialItemPos: Pos,
		coords: Coords,
		draggedItem: GridItem,
		html: H | null,
	) {
		this.dropPos = dropPos;
		this.coords = coords;
		this.draggedItem = draggedItem;
		this.html = html;
		this.initialItemPos = initialItemPos;
	}
}
