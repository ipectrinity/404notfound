import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import Preloader from "./components/Preloder/Preloader.jsx";

import Nav from "./components/Navbar/Navbar.jsx";
import Board from "./components/board/Board.jsx";

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
      .get("https://meme-api.herokuapp.com/gimme/10")
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
            {data.map((meme, index) => {
              return (
                <Board
                  key={index}
                  author={meme.author}
                  imageUrl={meme.url}
                  vote={meme.ups}
                  caption={meme.title}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
