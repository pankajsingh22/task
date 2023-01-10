import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createContext } from "react";
import Copa from "./Components/Copa";

export const NumContext = createContext();
function App() {
  return (
    <>
      <NumContext.Provider value={"user"}>
        <Copa />
      </NumContext.Provider>
    </>
  );
}

export default App;
