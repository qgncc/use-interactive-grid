import { Coords } from "types";

export interface InteractiveItem<Item> {
	item: Item;
	/**
	 * @param {Coords} coords screen coords
	 */
	setCoords: (coords: Coords) => void;
	resetCoords: () => void;
}
type HTMLElementOrigin = [number, number];

export class InteractiveHTMLItem<Item> implements InteractiveItem<Item> {
	element;
	allowOutOfBounds;
	origin;
	bounds;
	item;
	/**
	 * A wrapper for HTMLElements that provides a simple methods
	 * for setting a global postion with element's transform: translate() style property
	 * @param {HTMLElement} 		 html              A HTMLElement with changing position
	 * @param {boolean} 				 allowOutOfBounds  If true, allows the dragged piece to go out of its parent's bounds.
	 * @param {HTMLElementOrigin} origin - The tuple representing the X and Y coordinates of the HTMLElement's origin.
	 *                                   The values should be in the range of 0 to 1, where [0, 0] is the top-left corner and [1, 1] is the bottom-right corner.
	 *                                   [0.5, 0.5] - The default origin, indicating the center of the HTMLElement.
	 */
	constructor(
		html: HTMLElement,
		item: Item,
		allowOutOfBounds?: boolean,
		origin: HTMLElementOrigin = [0.5, 0.5],
	) {
		this.item = item;
		this.element = html;
		this.allowOutOfBounds = allowOutOfBounds;
		this.bounds = this.element.getBoundingClientRect();
		this.origin = origin;
	}

	setCoords(coords: Coords) {
		const x =
			coords[0] - this.bounds.left - this.origin[0] * this.element.offsetWidth;
		const y =
			coords[1] - this.bounds.top - this.origin[1] * this.element.offsetHeight;
		this.element.style.transform = `translate(${x}px, ${y}px )`;
	}
	resetCoords() {
		this.element.style.transform = "";
	}
}
