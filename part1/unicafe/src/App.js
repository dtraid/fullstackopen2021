import React, { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad === 0) return <p>No feedback given</p>;

  const sum = good + neutral + bad;

  return (
    <p>
      good {good}
      <br />
      neutral {neutral}
      <br />
      bad {bad}
      <br />
      all {sum}
      <br />
      average {(good - bad) / sum}
      <br />
      positive {(good / sum) * 100} %
    </p>
  );
};

export default App;
