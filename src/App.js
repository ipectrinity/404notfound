import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import Preloader from "./components/Preloder/Preloader.jsx";
import Nav from "./components/Navbar/Navbar.jsx";
import Memes from "./components/mems/Memes.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
// import { Router } from "@reach/router";

// const axios = require("axios").default;

function App() {
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    setLoading(true);
    // setLogin(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Router>
            <div className="navigation">
              <Nav login={login} setLoading={setLogin} />
            </div>
            <Switch>
              <div className="pusher">
                <Route path="/" exact component={Home} />
                <Route path="/memes" component={Memes} />
              </div>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
