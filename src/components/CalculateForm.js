import React from "react";
import { useState } from "react";

const defaultInput = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

const CalculateForm = (props) => {
  const [userInput, setUserInput] = useState(defaultInput);

  const inputHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
    setUserInput(defaultInput)
  };

  const clearFields = () => {
    setUserInput("");
  };

  return (
    <div>
      <form className="form" onSubmit={formSubmit}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(e) => inputHandler("current-savings", e.target.value)}
              value={userInput["current-savings"]}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(e) =>
                inputHandler("yearly-contribution", e.target.value)
              }
              value={userInput["yearly-contribution"]}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(e) => inputHandler("expected-return", e.target.value)}
              value={userInput["expected-return"]}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(e) => inputHandler("duration", e.target.value)}
              value={userInput["duration"]}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={clearFields} type="reset" className="buttonAlt">
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default CalculateForm;
