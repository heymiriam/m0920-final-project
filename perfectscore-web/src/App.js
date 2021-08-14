import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './pages/home/home';
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    < >
    <Router>
        <NavBar />
        <Route exact path="/"><Home /></Route>
      </Router>
    </>
  );
}

export default App;
