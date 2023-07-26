import "./App.css";
// SpotCheck 2
import LandingPage from "./LandingPage";
import NavBar from "./NavBar";

// SpotCheck 4
function About() {
  return (
    <div id="about">
      <SignUp />
      <Blurb />
    </div>
  );
}

function SignUp() {
  return <button>Sign Up</button>;
}

function Blurb() {
  return <p>Blurp</p>;
}

function App() {
  // SpotCheck3
  // localStorage.setItem("loggedIn", false);

  let isUserLoggedIn = localStorage.getItem("loggedIn");
  let componentToDisplay = isUserLoggedIn ? (
    <LandingPage />
  ) : (
    <p>This is an example of an about us page~</p>
  );

  // SpotCheck 2
  return (
    <div className="app">
      <NavBar />
      {componentToDisplay}
      {/* SpotCheck 4 */}
      <About />
    </div>
  );
}

export default App;

// SpotCheck 1
export function Sum() {
  const num1 = 10;
  const num2 = 20;

  return <div>Result: {num1 + num2}</div>;
}
