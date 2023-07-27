// import "./App.css";
import Button from "./components/Button";
import Company from "./components/Company";
import Calendar from "./components/Calendar";
import Register from "./components/Register";
import Hot from "./components/Hot";
import Cold from "./components/Cold";
import { useState } from "react";

function App() {
  let [companies] = useState([
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ]);

  const [reservations, setReservations] = useState([
    { day: "Monday", time: 2000, name: "Earl" },
    { day: "Monday", time: 1845, name: "Ella" },
    { day: "Tuesday", time: 1930, name: "Linda" },
    { day: "Wednesday", time: 2015, name: "Anni" },
  ]);

  let [isHot, setHotStatus] = useState(false);

  let [likesCount, setLikes] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <Button />
        <Company companies={companies} />
        <hr></hr>
        <Calendar reservations={reservations} />
        <hr></hr>
        <Register reservations={reservations} />
        <hr></hr>
        <Button
          click={() => {
            setHotStatus(!isHot);
          }}
          title="Click me"
        />
        {isHot ? <Hot /> : <Cold />}
        <hr></hr>
        <Button click={() => setLikes(likesCount + 1)} title="Like" />
        <p>Likes: {likesCount}</p>
      </header>
    </div>
  );
}

export default App;
