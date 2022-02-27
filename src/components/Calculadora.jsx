import React, { useState } from 'react';
import '../styles/Calculadora.css';

const Calculadora = () => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [currentOperation, setCurrentOperation] = useState("");
    const [result, setResult] = useState(0);

    const clickNumber = (value) => {
        if (currentOperation === "") {
            setNumber1(number1 + value);
        } else {
            setNumber2(number2 + value);
        }
    }

    const clickOperation = (value) => {
        setCurrentOperation(value);
    }

    const getResult = () => {
        switch (currentOperation) {
            case "+":
                setResult(Number(number1) + Number(number2));
                break;
            case "-":
                setResult(Number(number1) - Number(number2));
                break;
            case "*":
                setResult(Number(number1) * Number(number2));
                break;
            case "/":
                setResult(Number(number1) / Number(number2));
                break;
            default:
                break;
        }
    }

    const clear = () => {
        setNumber1("");
        setNumber2("");
        setCurrentOperation("");
        setResult("");
    }

    const deleteNumber = () => {
        if (currentOperation === "") {
          setNumber1(number1.toString().slice(0, -1));
        } else {
          setNumber2(number2.toString().slice(0, -1));
        }
      };

    return (
        <div className='calculator-grid'>
            <div className='output'>
                <div className='prevous-operand'>
                    {currentOperation? number1 + currentOperation : ""}
                </div>
                <div className='current-operand'>
                    {result? result: (!currentOperation? number1 : number2)}
                </div>
            </div>
            <button onClick={clear} className='span-two'>AC</button>
            <button onClick={deleteNumber}>⌂</button>
            <button onClick={() => clickOperation("/")}>/</button>
            <button onClick={() => clickNumber(7)}>7</button>
            <button onClick={() => clickNumber(8)}>8</button>
            <button onClick={() => clickNumber(9)}>9</button>
            <button onClick={() => clickOperation("*")}>*</button>
            <button onClick={() => clickNumber(4)}>4</button>
            <button onClick={() => clickNumber(5)}>5</button>
            <button onClick={() => clickNumber(6)}>6</button>
            <button onClick={() => clickOperation("-")}>-</button>
            <button onClick={() => clickNumber(1)}>1</button>
            <button onClick={() => clickNumber(2)}>2</button>
            <button onClick={() => clickNumber(3)}>3</button>
            <button onClick={() => clickOperation("+")}>+</button>
            <button onClick={() => clickNumber(".")}>.</button>
            <button onClick={() => clickNumber(0)}>0</button>
            <button onClick={getResult} className='span-two'>=</button>
        </div>
    )
}

export default Calculadora;