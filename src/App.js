import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import Preloader from "./components/Preloder/Preloader.jsx";
import Nav from "./components/Navbar/Navbar.jsx";
import Memes from "./components/mems/Mems.jsx";

const axios = require("axios").default;

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  useEffect(() => {
    axios
      .get("https://meme-api.herokuapp.com/gimme/50")
      .then(function (response) {
        console.log(response.data.memes);
        setData(response.data.memes);
      });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <div className="navigation">
            <Nav />
          </div>
          <div className="pusher">
            <Memes data={data} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
