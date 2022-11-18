import React, { useState } from "react";
import "./styling.css";
const App = () => {
  const link =
    "https://res.cloudinary.com/gramaseva/image/upload/v1655522064/IMG_20200802_204140_zmplvd.jpg";
  return (
    <div style={{ textAlign: "center" }}>
      <h1>SEXTANT PROJECT </h1>

      <p title="hi">place cursor on me to display the message</p>
      <br></br>
      <a href={link} download>
        download photo
      </a>
      <p contenteditable="true">you can edit me here also try once!</p>
      <marquee direction="right">FORAGE & CISCO</marquee>
    </div>
  );
};

export default App;
