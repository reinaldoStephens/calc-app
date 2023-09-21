import React, { useState } from "react";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";

import "./App.css";

const App = () => {
    const [stack, setStack] = useState("");

    return (
        <main className="react-calculator">
            <Result value={stack}></Result>
            <Numbers
                onClickNumber={(number) => {
                    console.log("onClickNumber", number);
                    setStack(number);
                }}
            ></Numbers>
            <Functions onContentClear={() => console.log("Content Clear")} onDelete={() => console.log("onDelete")}></Functions>
            <MathOperations
                onClickOperation={(operation) => console.log("Operation:", operation)}
                onClickEqual={(equal) => console.log("Equal:", equal)}
            ></MathOperations>
        </main>
    );
};

export default App;
