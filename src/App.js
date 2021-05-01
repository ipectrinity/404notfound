import React, { useState, useEffect } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import Preloader from "./component/Preloader/Preloader.jsx";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="App">
      <div>
        <Preloader></Preloader>
      </div>
    </div>
  );
}

export default App;
