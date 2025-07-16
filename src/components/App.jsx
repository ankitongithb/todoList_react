import React, { useState } from "react";

function App() {
  const [item, setItem] = useState([]);
  const [inputText, setInputText] = useState("");

  function handleChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  function addItem(e) {
    setItem((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((toDoItem) => (
            <li key={toDoItem}>{toDoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
