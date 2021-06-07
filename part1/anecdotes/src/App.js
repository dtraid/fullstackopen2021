import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const randomAnecdote = (anecdotes) => {
    setSelected((anecdotes.length * Math.random()) | 0);
  };

  const voteAnecdote = (index) => {
    setVotes(
      votes
        .slice(0, index)
        .concat(votes[index] + 1)
        .concat(votes.slice(index + 1))
    );
  };

  const mostVotedAnecdote = (votes) => votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes votes={votes[selected]} />
      <Button text="vote" handleClick={() => voteAnecdote(selected)} />
      <Button
        text="next anecdote"
        handleClick={() => randomAnecdote(anecdotes)}
      />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[mostVotedAnecdote(votes)]} />
      has {votes[mostVotedAnecdote(votes)]} votes
    </div>
  );
};

const Anecdote = ({ anecdote }) => <div>{anecdote}</div>;

const Votes = ({ votes }) => <div>has {isNaN(votes) ? 0 : votes} votes</div>;

const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

export default App;
