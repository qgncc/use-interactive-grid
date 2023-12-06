import { GridDimension, Pos } from "hooks/useGrid";
import { EventWithCoords } from "types";
import { coordsToPos } from "./coordsToPos";
import { getElementCoordsFromEvent } from "./getElementCoordsFromEvent";

export function getPosFromPointerEvent(
	event: EventWithCoords,
	element: HTMLElement,
	gridDimension: GridDimension,
): Pos {
	const width = element.offsetWidth;
	const height = element.offsetHeight;
	const [rowNumber, colNumber] = gridDimension;
	const pos = coordsToPos(
		getElementCoordsFromEvent(event, element),
		{ height, width },
		{ rowNumber, colNumber },
	);
	return pos;
}
