import { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import CalculateForm from "./components/CalculateForm";
import Table from "./components/Table";
import Header from "./components/header";

function App() {
  const [receivedInput, setReceivedInput] = useState(null);
  const calculateHandler = (userInput) => {
    setReceivedInput(userInput);
  };

  const yearlyData = []; // per-year results

  if (receivedInput) {
    let currentSavings = +receivedInput["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +receivedInput["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +receivedInput["expected-return"] / 100;
    const duration = +receivedInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = ""; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header logo={logo} />

      <CalculateForm onCalculate={calculateHandler} />
      {!receivedInput && (
        <p style={{ textAlign: "center" }}>No investment calculated yet.</p>
      )}
      {receivedInput && (
        <Table
          data={yearlyData}
          initialInvestment={receivedInput["current-savings"]}
        />
      )}

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
