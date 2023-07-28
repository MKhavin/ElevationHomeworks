import Hudini from "./components/Hudini";
import Home from "./components/Home";
import Landing from "./components/Landing";
import { useState } from "react";

function App() {
  const ex2Data = {
    user: "Robyn",
    store: [
      { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
      { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
      {
        item: "Surround Sound Pelican",
        price: 3099,
        discount: 0.05,
        hottest: true,
      },
    ],
    shouldDiscount: false,
    currentPage: "Landing",
  };

  let [isShow, setShowStatus] = useState(false);
  let [currentPage, setCurrentPage] = useState("Landing");
  let [isDiscounted, setDiscountSatus] = useState(false);

  return (
    <div className="ex-1">
      <h1>Exercise 1</h1>
      <Hudini show={isShow} />
      <button onClick={() => setShowStatus(!isShow)}>Show Hudini !</button>
      <h1>Exercise 2</h1>
      <Landing userData={ex2Data} />
      <hr></hr>
      <Home store={ex2Data.store} />
      <h1>Exercise 3</h1>
      {currentPage === "Landing" ? (
        <Landing userData={ex2Data} />
      ) : (
        <Home store={ex2Data.store} />
      )}
      <button
        onClick={() =>
          setCurrentPage(currentPage === "Landing" ? "Home" : "Landing")
        }
      >
        Next Page
      </button>
      <h1>Exercise 4</h1>
      <Home store={ex2Data.store} discount={isDiscounted} />
      <button onClick={() => setDiscountSatus(!isDiscounted)}>Discount</button>
    </div>
  );
}

export default App;
