import React, { useEffect, useState } from "react";

const Counter = () => {
  // let valorContador = 0;
  const [valorContador, setValorContador] = useState(0);
  //valor, funcion para cambiar valor = useState(valor Inicial)

   const handleClick = (accion) => {
  //   if (accion === "sumar") {
  //     setValorContador(valorContador + 1);
  //   } else if (accion === "restar") {
  //     setValorContador(valorContador - 1);
  //   } else if (accion === "reset") {
  //     setValorContador(0);
  //   }

    switch(accion){
      case "sumar":
        setValorContador(valorContador + 1);
        break;
      case "restar":
        setValorContador(valorContador - 1);
        break;
      case "reset":
        setValorContador(0);
        break
      default:
        break;
    }
  };

  useEffect(()=>{
    console.log(valorContador)
  },[valorContador])

  return (
    <>
      <h1>{valorContador}</h1>
      <button onClick={()=>handleClick ("sumar")}>+</button>
      <button onClick={()=>handleClick("restar")}>-</button>
      <button onClick={()=>handleClick("reset")}>Reset</button>
    </>
  );
};

export default Counter;
