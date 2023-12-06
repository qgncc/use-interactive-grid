import { DropEvent, PickEvent } from "events";
import { GridInit, GridItem } from "hooks/useGrid";

/**
 * Column and row of a cell. First number is column, second number is row
 */
export type Pos = [number, number]; // first number — column, second number — row
/**
 * Coordinates in pixels. First number is x, second number is y
 */
export type Coords = [number, number]; // first number — x, second number — y

export type EventWithCoords = { clientX: number; clientY: number };

export type DragEvent = {};

export type OnDragFunction = (
	event: DragEvent,
	controller: InteractiveGridController,
) => void;

export type OnPickFunction<H extends HTMLElement> = (
	event: PickEvent<H>,
	controller: InteractiveGridController,
) => void;

export type OnDropFunction<H extends HTMLElement> = (
	event: DropEvent<H>,
	controller: InteractiveGridController,
) => void;
export type ShouldPickFunction<H extends HTMLElement> = (
	event: PickEvent<H>,
) => boolean;

export type ShouldDropFunction<H extends HTMLElement> = (
	event: DropEvent<H>,
) => boolean;

export type PutFunction = (item: GridItem | null, pos: Pos) => void;
export type RemoveFunction = (pos: Pos) => void;
export type GetFunction = (pos: Pos) => GridItem | null | undefined;

export interface InteractiveGridController {
	get: GetFunction;
	put: PutFunction;
	remove: RemoveFunction;
}

export type DropBehaviours = "swap" | "replace";

export type Config = {
	rowNumber: number;
	colNumber: number;
	initGrid: GridInit;
	onPick?: OnPickFunction<HTMLElement>;
	onDrag?: OnDragFunction;
	onDrop?: OnDropFunction<HTMLElement> | DropBehaviours;
	shouldPick?: ShouldPickFunction<HTMLElement>;
	shouldDrop?: ShouldDropFunction<HTMLElement>;
};

export type ElementWithSize = {
	width: number;
	height: number;
};

export type ElementWithBoundingClientRect = Pick<
	Element,
	"getBoundingClientRect"
>;

export type ElementWithComputedStyles = {
	getComputedStyle: typeof getComputedStyle;
};
