import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("내용을 입력해주세오");
      return;
    }

    const item = {
      isDone: false,
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldlist) => [...oldlist, item]);
    setNewItem("");
  }

  const notDoneItems = items.filter((item) => !item.isDone);
  const doneItems = items.filter((item) => item.isDone);

  function isitDone(item) {
    const filtedArray = items.filter((doneItemz) => {
      return doneItemz.id !== item.id;
    });
    const newfilted = [
      ...filtedArray,
      { ...item, isDone: item.isDone ? false : true },
    ];

    setItems(newfilted);
    console.log(items);
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todolist</h1>

      <input
        type="text"
        placeholder="add"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>add</button>
      <div>진행중</div>
      <ul>
        {notDoneItems.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button className="dbtn" onClick={() => deleteItem(item.id)}>
                ❌
              </button>
              <button className="fixbtn">수정</button>
              <button className="donebtn" onClick={() => isitDone(item)}>
                완료
              </button>
            </li>
          );
        })}
      </ul>
      <div>완료</div>
      <ul>
        {doneItems.map((item) => {
          return (
            <li key={item.id}>
              {item.value}{" "}
              <button className="dbtn" onClick={() => deleteItem(item.id)}>
                ❌
              </button>
              <button className="fixbtn">수정</button>
              <button className="donebtn" onClick={() => isitDone(item)}>
                완료
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
