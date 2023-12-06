import { Pos } from "hooks/useGrid";

export function isPosEqueal(posA: Pos, posB: Pos) {
	return posA[0] === posB[0] && posA[1] === posB[1];
}
