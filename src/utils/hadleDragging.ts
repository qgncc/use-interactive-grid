import { Draggable } from "entities";
import { getEventCoords } from "./extractCoordsFromEvent";

export function handleDragging(draggable: Draggable) {
	document.body.classList.add("bodyDragging");
	function handlePointerMove(event: PointerEvent) {
		draggable.setCoords(getEventCoords(event));
	}
	function stopDragging() {
		draggable.resetCoords();
		document.removeEventListener("pointermove", handlePointerMove);
		document.removeEventListener("pointerup", stopDragging);
		document.body.classList.remove("bodyDragging");
	}
	document.addEventListener("pointermove", handlePointerMove);
	document.addEventListener("pointerup", stopDragging);
}
