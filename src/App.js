import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import Exams from "./pages/Exams";
import Labs from "./pages/Labs";
import Repasos from "./pages/Repasos";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/exams" component={Exams}/>
        <Route path="/repasos" component={Repasos}/>
        <Route path="/labs" component={Labs}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
