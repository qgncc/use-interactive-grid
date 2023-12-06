import { GridItem, Pos } from "hooks/useGrid";
import { Coords } from "types";
import { InteractiveGridEvent } from "./InteractiveGridEvent";

export class DragStartEvent<H extends HTMLElement>
	implements InteractiveGridEvent
{
	initialItemPos: Pos;
	coords: Coords;
	draggedItem: GridItem;
	html: H | null;
	constructor(
		initialItemPos: Pos,
		coords: Coords,
		draggedItem: GridItem,
		html: H | null,
	) {
		this.initialItemPos = initialItemPos;
		this.coords = coords;
		this.draggedItem = draggedItem;
		this.html = html;
	}
}
