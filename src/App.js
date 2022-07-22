import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/index";
import SignUp from "./Pages/signUp";
import SignIn from "./Pages/signIn";
import "./Styles/index.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
