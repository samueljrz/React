import React, {useState} from "react";
//import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";
const App = () => {
  const [bool, setBool] = useState(false);
  
  return (
    <div className="button" onClick={() => {setBool(!bool)}}>
      {bool ? <ClassComponent /> : <h1>no</h1>}
    </div>
  );
};

export default App;
