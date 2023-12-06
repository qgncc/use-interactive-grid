import { Coords, EventWithCoords } from "types";
import { getEventCoords } from "./extractCoordsFromEvent";
import { globalCoordsToElementCoords } from "./globalCoordsToElementCoords";

export function getElementCoordsFromEvent(
	event: EventWithCoords,
	element: Element,
): Coords {
	return globalCoordsToElementCoords(getEventCoords(event), element);
}
