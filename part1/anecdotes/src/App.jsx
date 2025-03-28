import { useState } from "react";

const VotingSystem = ({
  anecdote,
  index,
  votes,
  setVotes,
  handleNextAnecdote,
}) => {
  const handleClick = () => {
    const copy = [...votes];
    copy[index]++;
    setVotes(copy);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdote}</p>
      <p>has {votes[index]} votes</p>
      <button onClick={handleClick}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(8).fill(0));

  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const getMostVotedAnecdote = () => {
    let maxVotes = 0;
    let mostVotedIndex = 0;

    votes.forEach((voteCount, index) => {
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        mostVotedIndex = index;
      }
    });
    return {
      anecdote: anecdotes[mostVotedIndex],
      votes: maxVotes,
    };
  };

  const mostVoted = getMostVotedAnecdote();

  return (
    <div>
      <VotingSystem
        anecdote={anecdotes[selected]}
        index={selected}
        votes={votes}
        setVotes={setVotes}
        handleNextAnecdote={handleNextAnecdote}
      />

      {mostVoted.votes > 0 && (
        <div>
          <h2>Anecdote with the most votes</h2>
          <p>{mostVoted.anecdote}</p>
          <p>has {mostVoted.votes} votes</p>
        </div>
      )}
    </div>
  );
};

export default App;
