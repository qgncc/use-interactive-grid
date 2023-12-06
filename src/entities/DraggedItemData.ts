import { Pos } from "hooks/useGrid";

export class DraggedItemData<I extends any, H extends HTMLElement = never> {
	item: I;
	html: H | null;
	initialPos: Pos;

	constructor(item: I, initialPos: Pos, html?: H) {
		this.item = item;
		this.html = html || null;
		this.initialPos = initialPos;
	}
}
