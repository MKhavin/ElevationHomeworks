import { useState } from "react";
import ImagesContainer from "./components/ImageContainer";
import Exercise2 from "./components/Exercise2";

function App() {
  const images = [
    "http://www.agr.gc.ca/resources/prod/img/discover-decouvrez/potatoes300x210.jpg",
    "https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA3Ni85MTYvb3JpZ2luYWwvc3BpbmFjaC5qcGc=",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PerfectStrawberry.jpg/220px-PerfectStrawberry.jpg",
  ];
  let [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="App">
      <div id="ex-1">
        <h1>Exercise 1</h1>
        <ImagesContainer
          imgSrc={images[currentImage]}
          setCurrentImage={setCurrentImage}
          currentImage={currentImage}
          imagesCount={images.length - 1}
        />
      </div>

      <hr></hr>

      <div id="ex-2">
        <Exercise2 />
      </div>
    </div>
  );
}

export default App;
