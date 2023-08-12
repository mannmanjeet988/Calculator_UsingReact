import React, { useState } from "react";
import "./style.css";
import { TfiMinus } from "react-icons/tfi";

// this is the component for making calculator
const Form = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [result, setResult] = useState("");

  // updating num1 using useState
  function updateNum1(event) {
    console.log("num1", event.target.value);
    setNum1(event.target.value);
  }

  //updating num2 using useState
  function updateNum2(event) {
    console.log("num2", event.target.value);
    setNum2(event.target.value);
  }

  // function to check whether the inputs are valid or not
  function isInputValidate() {
    if (num1.trim() === "" && num2.trim() === "") {
      setError("Error : Num1 and Num2 can not be empty!");
      setSuccess("");
      setResult("");
      return false;
    }

    if (num1.trim() === "") {
      setError("Error : Num1 can not be empty!");
      setSuccess("");
      setResult("");
      return false;
    }

    if (num2.trim() === "") {
      setError("Error : Num2 can not be empty!");
      setSuccess("");
      setResult("");
      return false;
    }

    if (isNaN(num1) || isNaN(num2)) {
      setError("Error : Please enter valid numbers!");
      setSuccess("");
      setResult("");
      return false;
    }

    return true;
  }

  // below are the functions to perform calculator operations
  function addition() {
    if (isInputValidate()) {
      // if all inputs fields have valid input, perform addition
      setError("");
      let result = parseFloat(num1) + parseFloat(num2);
      console.log(result);
      setSuccess("Success!");
      setResult(result);
    }
  }

  function subtraction() {
    if (isInputValidate()) {
      // if all inputs fields have valid input, perform subtraction
      setError("");
      let result = parseFloat(num1) - parseFloat(num2);
      console.log(result);
      setSuccess("Success!");
      setResult(result);
    }
  }

  function multiply() {
    if (isInputValidate()) {
      setError("");
      // if all inputs fields have valid input, perform multiplication
      let result = parseFloat(num1) * parseFloat(num2);
      console.log(result);
      setSuccess("Success!");
      setResult(result);
    }
  }

  function divide() {
    if (isInputValidate()) {
      setError("");
      // validation for num2 !== 0
      if (parseFloat(num2) === 0) {
        setResult("");
        setSuccess("");
        setError("Infinity : can not be divided by zero");
        return;
      }
      // if num2 !== 0, perform divison
      else {
        let result = parseFloat(num1) / parseFloat(num2);
        console.log(result);
        setSuccess("Success!");
        setResult(result.toFixed(2));
      }
    }
  }

  return (
    <div className="form-container">
      <div className="form-inner-div">
        <p className="heading">React Calculator</p>
        <input type="text" placeholder="NUM1" onChange={updateNum1}></input>
        <input type="text" placeholder="NUM2" onChange={updateNum2}></input>
        <div className="btn-div">
          <button onClick={addition}>+</button>
          <button onClick={subtraction}>
            <TfiMinus />
          </button>
          <button onClick={multiply}>*</button>
          <button onClick={divide}>/</button>
        </div>
        <p className="error">{error}</p>
        <h3 className="success"> {success}</h3>
        {/* if result exists, display the result */}
        {result && <h3 className="result">Result = {result} </h3>}
      </div>
    </div>
  );
};

export default Form;
