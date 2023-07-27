import Hudini from "./components/Hudini";
import { useState } from "react";

function App() {
  let [isShow, setShowStatus] = useState(false);

  return (
    <div className="ex-1">
      <h1>Exercise 1</h1>
      <Hudini show={isShow} />
      <button onClick={() => setShowStatus(!isShow)}>Show Hudini !</button>
    </div>
  );
}

export default App;
