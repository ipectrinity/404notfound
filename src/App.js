import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.scss";
import Preloader from "./components/Preloder/Preloader.jsx";

import Nav from "./components/Navbar/Navbar.jsx";

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
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <div className="navigation">
            <Nav />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
