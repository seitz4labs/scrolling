import React from "react";
import "./styles.css";

function cols(n) {
  let a = [];
  for (let c = 0; c < n; c++) {
    a.push({
      width: "100px",
      header: "Header " + c,
      content: (row, i) => (
        <span>
          col {c} {row.a}
        </span>
      )
    });
  }
  return a;
}
function rows(n) {
  let a = [];
  for (let i = 0; i < n; i++) {
    a.push({ a: "row " + 1 });
  }
  return a;
}

export default function App() {
  const famogo = cols(6);

  const migs = rows(100);
  return (
    <div>
      <div
        id="Migrations"
        className="caramel-section"
        style={{ backgroundColor: "#efe" }}
      >
        This is my header
        <div
          id="Migrations"
          className="caramel-section"
          style={{ backgroundColor: "#dfd" }}
        >
          This is my sub header
        </div>
      </div>

      <div id="Migrations" className="caramel-section">
        <div
          className="caramel-scrollablex"
          style={{ minWidth: "100vw", maxWidth: "100vw" }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            {famogo.map(col => (
              <div
                style={{
                  display: "flex",
                  minWidth: col.width,
                  maxWidth: col.width,
                  backgroundColor: "#fee"
                }}
              >
                {col.header}
              </div>
            ))}
          </div>
          <div className="caramel-scrollabley">
            {migs.map((row, i) => (
              <div
                key={row.runId}
                style={{ display: "flex", flexDirection: "row" }}
              >
                {famogo.map(col => (
                  <div
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
