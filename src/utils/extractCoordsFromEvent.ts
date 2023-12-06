import { Coords, EventWithCoords } from "types";

export function getEventCoords(event: EventWithCoords): Coords {
	return [event.clientX, event.clientY];
}
