import "./App.css"
import Navbar from "./components/NavBar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Intro from "./pages/Intro/intro";
import Contact from "./pages/Contact/contact";
import Resume from "./pages/Resume/resume";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route index path="/" element={<Intro/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/resume" element={<Resume/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
