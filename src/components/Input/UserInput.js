import { useState } from "react";


const initialData = {
  "current-savings": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};


const UserInput = (props) => {


  const [userInput, setUserInput] = useState(initialData);

  const resetButtonHandeler = () => {
    setUserInput(initialData);
  };

  const submitHandeler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const inputChangeHandeler = (input, value) => {
    setUserInput((prev) => {
      return { ...prev, [input]: +value };
    });
  };

  return (
    <form onSubmit={submitHandeler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) =>
              inputChangeHandeler("current-savings", event.target.value)
            }
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) =>
              inputChangeHandeler("yearly-contribution", event.target.value)
            }
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) =>
              inputChangeHandeler("expected-return", event.target.value)
            }
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => {
              inputChangeHandeler("duration", event.target.value);
            }}
            value={userInput.duration}
          />
        </p>
      </div>
      <p className="actions">
        <button
          type="reset"
          className="buttonAlt"
          onClick={resetButtonHandeler}
        >
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
