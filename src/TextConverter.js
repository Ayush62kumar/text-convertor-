import React, { useState } from "react";

export default function TextConverter() {
  const [text, setText] = useState("");

  const toUpperCase = () => {
    setText(text.toUpperCase());
  };

  const toLowerCase = () => {
    setText(text.toLowerCase());
  };

  const capitalizeWords = () => {
    const newText = text.replace(/\b\w/g, (char) =>
      char.toUpperCase()
    );
    setText(newText);
  };

  const reverseText = () => {
    setText(text.split("").reverse().join(""));
  };

  const removeSpaces = () => {
    const newText = text.replace(/\s/g, "");
    setText(newText);
  };

  const copyText = () => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard");
  };

  const clearText = () => {
    setText("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h1>Text Converter App</h1>

      <textarea
        rows="10"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <div style={{ marginTop: "15px" }}>
        <button onClick={toUpperCase}>UPPERCASE</button>
        <button onClick={toLowerCase}>lowercase</button>
        <button onClick={capitalizeWords}>Capitalize</button>
        <button onClick={reverseText}>Reverse</button>
        <button onClick={removeSpaces}>Remove Spaces</button>
        <button onClick={copyText}>Copy</button>
        <button onClick={clearText}>Clear</button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Summary</h3>
        <p>Words: {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}</p>
        <p>Characters: {text.length}</p>
      </div>
    </div>
  );
}