import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [naresh, setNaresh] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_LMjp6qJbpfrFg353soh0MfY7CRq1e&ipAddress=8.8.8.8"
      )
      .then((response) => setNaresh(response.data));
  }, []);
  return (
    <div>
      {naresh.map((item) => (
        <li>{item}</li>
      ))}
      ;<h1>jhf</h1>
    </div>
  );
};

export default App;
