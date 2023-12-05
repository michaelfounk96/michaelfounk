import Navbar from "./components/NavBar/navbar";
import "./App.css"
import Intro from "./components/Intro/intro";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Contact />
    </div>
  );
}

export default App;
