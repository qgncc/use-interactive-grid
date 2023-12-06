import { DropEvent } from "events";
import { InteractiveGridController } from "types";

export function onDropSwap<H extends HTMLElement>(
	event: DropEvent<H>,
	controller: InteractiveGridController,
) {
	console.log("here");
	const { get, put } = controller;
	const { draggedItem, initialItemPos, dropPos } = event;
	const otherItem = get(dropPos);
	if (otherItem === undefined) return;
	console.log(draggedItem, dropPos, initialItemPos, otherItem);
	put(draggedItem, dropPos);
	put(otherItem, initialItemPos);
}
