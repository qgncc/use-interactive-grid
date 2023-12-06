import { useInteractiveGrid } from "@";
function createItem(id: number) {
  return { id, data: { id } };
}

const initGrid = new Array(5)
  .fill(0)
  .map((_, i) => new Array(5).fill(0).map((_, j) => createItem(i * 5 + j)));
console.log(initGrid);

function App() {
  const { grid, props, getElementProps } = useInteractiveGrid<HTMLDivElement>({
    initGrid,
    rowNumber: 5,
    colNumber: 5,
    onDrop: "replace",
  });

  return (
    <div
      {...props}
      style={{
        borderWidth: "10px 15px 0px 0px",
        borderStyle: "solid",
        borderColor: "red",
        width: 500,
        height: 500,
        margin: 200,
        background: "#3123df",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((element, colIndex) => {
          return element ? (
            <div
              key={element.id}
              style={{
                color: "aqua",
                width: 100,
                height: 100,
                background: (element.id as number) % 2 ? "#000" : "#3215ff",
                position: "absolute",
                ...getElementProps([colIndex, rowIndex]).style,
              }}
            >
              {colIndex} {rowIndex}
            </div>
          ) : null;
        }),
      )}
    </div>
  );
}

export default App;
