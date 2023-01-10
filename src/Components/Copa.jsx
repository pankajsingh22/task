import React, { useState } from "react";
import CompB from "./CompB";

const Copa = () => {
  const [count, setCount] = useState(0);

  const IncNum = () => {
    setCount(count + 1);
    console.log("clicked" + count);
  };
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100">
        <CompB />
        <h1 className=" text-danger">{count}</h1>
        <button onClick={IncNum} className="btn_count ">
          click
        </button>
      </div>
    </>
  );
};

export default Copa;
