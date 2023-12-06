import { DropEvent } from "events";
import { InteractiveGridController } from "types";
import { isPosEqueal } from "./isPosEqual";

export function onDropReplace<H extends HTMLElement>(
	event: DropEvent<H>,
	controller: InteractiveGridController,
) {
	const { put, get } = controller;
	const { draggedItem, initialItemPos, dropPos } = event;
	const isOutOfBounce = !get(dropPos);
	console.log(isPosEqueal(initialItemPos, dropPos), initialItemPos, dropPos);
	if (isOutOfBounce || isPosEqueal(initialItemPos, dropPos)) return;
	put(null, initialItemPos);
	put(draggedItem, dropPos);
}
