import { useState } from "react";

function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState(() => "Jack");

  const addName = () => {
    setList([...list, name]);
    setName("");
  };
  return (
    <div>
      <ul>
        {list.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={addName}>Add Name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;
