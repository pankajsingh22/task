import React from "react";
import { useContext } from "react";
import { NumContext } from "../App";

const CompB = () => {
  const user = useContext(NumContext);
  return (
    <>
      <h1>WELCOME</h1>
      <h2>{user}</h2>
    </>
  );
};

export default CompB;
