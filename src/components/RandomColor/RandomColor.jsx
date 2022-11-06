import React, { useEffect, useState, useRef } from "react";
import { getRandomColor } from "../../helpers/getRamdomColor";

const RandomColor = () => {
  const [color, setColor] = useState("#bbb");
  const rectangle = useRef();

  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    //setColor(getRandomColor())
  };
  useEffect(() => {
    rectangle.current.style.backgroundColor = color;
    //rectangle.current===document.getElementById("Id")
  }, [color]);

  return (
    <div ref={rectangle}>
      <h1>El color selecionado es{color} </h1>
      <button onClick={handleClick}>Cambiar color</button>
    </div>
  );
};

export default RandomColor;
