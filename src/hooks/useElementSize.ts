import { MutableRefObject, RefObject, useEffect, useState } from "react";
export function useElementSize<T extends HTMLElement | undefined>(
	ref: RefObject<T> | MutableRefObject<T>,
) {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);
	useEffect(() => {
		if (ref.current) {
			setWidth(ref.current.offsetWidth);
			setHeight(ref.current.offsetHeight);
		}
	}, []);

	return [width, height];
}
