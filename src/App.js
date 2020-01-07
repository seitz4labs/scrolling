import React from "react";
import "./styles.css";

function cols(n) {
  let a = [];
  let total = 0;
  let width = 100;
  for (let c = 0; c < n; c++) {
    total += width;
    a.push({
      width: "" + width + "px",
      header: "Header " + c,
      content: (row, i) => (
        <span>
          col {c} {row.a}
        </span>
      )
    });
  }
  return [total, a];
}
function rows(n) {
  let a = [];
  for (let i = 0; i < n; i++) {
    a.push({ a: "row " + 1 });
  }
  return a;
}

export default function App() {
  const [totalWidth, famogo] = cols(6);

  const migs = rows(100);
  return (
    <div className="page">
      <div className="head">
        This is my header
        <div className="sub-head">This is my sub header</div>
      </div>

      <div className="mig">
        <div
          className="mig-table"
          style={{
            minWidth: totalWidth + "px",
            maxWidth: totalWidth + "px"
          }}
        >
          <div className="mig-table-head">
            {famogo.map(col => (
              <div
                className="mig-table-head-th"
                style={{
                  minWidth: col.width,
                  maxWidth: col.width
                }}
              >
                {col.header}
              </div>
            ))}
          </div>
          <div
            id="Mig Body"
            className="caramel-scrollable-y"
            style={{ width: "100%" }}
          >
            hello hello hello hello hello hello hello hello hello hello hello
            hello hllll hello hello
            {/* {migs.map((row, i) => (
              <div
                className="caramel-section-row"
                id="Mig Body row"
                key={row.runId}
                // style={{ display: "flex", flexDirection: "row" }}
              >
                {famogo.map(col => (
                  <div
                    className="caramel-section-col"
                    style={{
                      display: "flex",
                      minWidth: col.width,
                      maxWidth: col.width,
                      backgroundColor: "#eef"
                    }}
                  >
                    {col.content(row, i)}
                  </div>
                ))}
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
}
