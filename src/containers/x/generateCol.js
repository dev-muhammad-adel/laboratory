import React from "react";
import "./main.css";
const generateCols = (col) => {
  return col.map((e) => ({
    title: e?.title
      ? e.title.translate()
      : e?.key
      ? e.key.translate()
      : e.translate(),
    dataIndex: e?.key ? e.key : e,
    key: e?.key ? e.key : e,
    // ellipsis: true,
    // responsive: ["md"],
    width: col.length > 3 ? 150 : "",

    render: e?.content
      ? (text, record) => (
          <div className="text-overflow">{e.content(text, record)}</div>
        )
      : (text) => <div className="text-overflow">{text}</div>,
  }));
};
export { generateCols };
