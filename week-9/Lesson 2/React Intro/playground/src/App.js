// import logo from "./logo.svg";
import "./App.css";

function App() {
  // SpotCheck 1
  const getStuff = () => <h1>Hello World in React</h1>;

  // SpotCheck 2
  const getMorningGreeting = () => <h1>Good morning, Sir !</h1>;
  const getEveningGreeting = () => <h1>Good evening, Sir !</h1>;
  const currentTime = new Date().getHours();

  return (
    <div>
      <div className="ex-space">
        <h4 className="ex-title">Spot-check 1</h4>
        <div className="exercise" id="spotcheck-1">
          {getStuff()}
        </div>

        <h4 className="ex-title">Spot-check 2</h4>
        <div className="exercise" id="spotcheck-2">
          {currentTime <= 12 ? getMorningGreeting() : getEveningGreeting()}
        </div>

        <h4 className="ex-title">Spot-check 3</h4>
        <div className="exercise" id="spotcheck-3">
          {[
            getMorningGreeting(),
            getEveningGreeting(),
            <p>Array Power in React 💪💪💪</p>,
          ]}
        </div>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
