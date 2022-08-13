import logo from "./logo.svg";
import "./App.css";
import Menubar from "./components/header/Menubar";
import Bodysec from "./components/body/Bodysec";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/"><Menubar category='general'/></Route>
            <Route path="/bussiness"><Menubar category='bussiness'/></Route>
            <Route path="/entertainment"><Menubar category='entertainment'/></Route>
            <Route path="/general"><Menubar category='general'/></Route>
            <Route path="/health"><Menubar category='health'/></Route>
            <Route path="/sports"><Menubar category='sports'/></Route>
            <Route path="/technology"><Menubar category='technology'/></Route>
          </Switch>
          <Bodysec />
        </div>
      </Router>
    </>
  );
}

export default App;
