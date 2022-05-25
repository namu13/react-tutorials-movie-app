import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onClick = (event) => {
    setToDoList((currentArray) =>
      currentArray.filter(
        (item) => item !== event.target.previousSibling.innerHTML
      )
    );
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDoList((currentArray) => [toDo, ...currentArray]);
  };
  return (
    <div>
      <h1>My To Dos ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDoList.map((item, index) => (
          <div>
            <li key={index}>{item}</li>
            <span onClick={onClick}>❌</span>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
