//import './App.css';
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
import CreateContact from "./components/CreateContact"
import Contacts from "./components/Contacts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/contacts/new" element={<CreateContact/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;