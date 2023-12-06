import { InteractiveItem } from "entities";
import { Coords, Pos } from "types";

export type GridEventHandlers = {
	onDragStart: (e: DragStartEvent) => void;
	onDrag: () => void;
	onDragEnd: (e: DragEndEvent) => void;
	onSelect: () => void;
};

export type ExtractedEventData<Item> = {
	globalCoords: Coords;
	item: InteractiveItem<Item>;
};

export type EventExtractor = {
	onPointerDown: <Event, View>(e: Event) => ExtractedEventData<View>;
	onPointerUp: <Event, View>(e: Event) => ExtractedEventData<View>;
	onPointerMove: <Event, View>(e: Event) => ExtractedEventData<View>;
};

type GridEvent = { pos: Pos; coords: Coords };

export type DragStartEvent = {} & GridEvent;

export type DragEndEvent = {} & GridEvent;

export type DragEvent = {} & GridEvent;

export type SelectEvent = {} & GridEvent;

export type GetFunction<T> = (pos: Pos) => T;
// export type RemoveFunction<T> = (pos: Pos) => T;
// export type PutFunction<T> = (pos: Pos, element: T) => void;

export type GridManager<T extends unknown> = {
	get: GetFunction<T>;
};
