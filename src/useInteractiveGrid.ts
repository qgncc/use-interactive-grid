import { DraggableHTMLElement, DraggedItemData } from "entities";
import { DropEvent, PickEvent } from "events";
import { useElementSize } from "hooks/useElementSize";
import { GridItem, Pos, useGrid } from "hooks/useGrid";
import { PointerEventHandler, useRef, useState } from "react";
import { Config, InteractiveGridController } from "types";
import {
	getElementCoordsFromEvent,
	getPosFromPointerEvent,
	handleDragging,
	onDropReplace,
	onDropSwap,
} from "utils";

export function useInteractiveGrid<H extends HTMLElement>({
	rowNumber,
	colNumber,
	initGrid,
	onPick,
	// onDrag,
	onDrop = "swap",
	shouldDrop = () => true,
	shouldPick = () => true,
}: Config) {
	const gridRef = useRef<H>();
	const [width, height] = useElementSize(gridRef);
	let [draggedItemData, setPickedItem] = useState<DraggedItemData<
		GridItem,
		H
	> | null>(null);
	const { grid, put, remove, get } = useGrid(initGrid, rowNumber, colNumber);
	const controller: InteractiveGridController = { put, remove, get };

	const handlePointerDown: PointerEventHandler<H> = (event) => {
		const gridElement = gridRef.current;
		if (!gridElement) return;
		const pos = getPosFromPointerEvent(event, gridElement, [
			colNumber,
			rowNumber,
		]);
		const coords = getElementCoordsFromEvent(event, gridElement);
		const draggedItem = get(pos);
		if (!draggedItem) return;
		const draggedHTMLElement: HTMLElement | null =
			event.target && event.target !== gridElement
				? (event.target as HTMLElement)
				: null;
		const pickedItem = new DraggedItemData(draggedItem, pos, event.target as H);
		if (draggedHTMLElement)
			handleDragging(
				new DraggableHTMLElement(draggedHTMLElement as HTMLElement),
			);
		const pickEvent = new PickEvent<HTMLElement>(
			pos,
			coords,
			draggedItem,
			draggedHTMLElement,
		);
		if (shouldPick && !shouldPick(pickEvent)) return;
		setPickedItem(pickedItem);
		onPick && onPick(pickEvent, controller);
	};

	const handlePointerUp: PointerEventHandler<HTMLElement> = (event) => {
		console.log(draggedItemData);
		const gridElement = gridRef.current;
		if (!draggedItemData) return;
		if (!gridElement) return;

		const pos = getPosFromPointerEvent(event, gridElement, [
			colNumber,
			rowNumber,
		]);
		const coords = getElementCoordsFromEvent(event, gridElement);
		setPickedItem(null);
		const dropEvent = new DropEvent<HTMLElement>(
			pos,
			draggedItemData.initialPos,
			coords,
			draggedItemData.item,
			draggedItemData.html,
		);
		if (shouldDrop && !shouldDrop(dropEvent)) return;
		if (typeof onDrop === "string") {
			if (onDrop === "swap") {
				onDropSwap(dropEvent, controller);
			} else if (onDrop === "replace") {
				onDropReplace(dropEvent, controller);
			}
		} else {
			onDrop && onDrop(dropEvent, controller);
		}
	};

	function getElementProps(pos: Pos) {
		const x = (pos[0] * width) / colNumber;
		const y = (pos[1] * height) / rowNumber;
		return {
			style: {
				transform: `translate(${x}px, ${y}px)`,
			},
		};
	}

	return {
		grid,
		isDragging: !!draggedItemData,
		getElementProps,
		props: {
			ref: gridRef,
			onPointerDown: handlePointerDown,
			onPointerUp: handlePointerUp,
		},
	};
}
