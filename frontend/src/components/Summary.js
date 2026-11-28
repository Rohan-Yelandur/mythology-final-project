import './Summary.css';

function Summary({ scenarios, choices, onPlayAgain }) {
  let matches = 0;
  scenarios.forEach((scenario) => {
    if (choices[scenario.id] === scenario.poemChoice) {
      matches++;
    }
  });

  return (
    <section className="summary">
      <h2 className="summary-heading">Your Journey</h2>
      <p className="summary-score">
        You made the same choice as the story in {matches} of {scenarios.length} scenarios.
      </p>

      <h3 className="summary-thesis-heading">Thesis</h3>
      <p>
        Because Odysseus is fated to reach Ithaca, the <em>Odyssey</em>'s moral code is uneven. The poem
        judges every character by whether their choices serve homecoming (nostos), rewarding restraint and
        punishing appetite and pride, but only Odysseus's return is guaranteed. The same kinds of failures
        that kill his crew only delay him.
      </p>
      <p>more stuff</p>

      <button className="summary-button" onClick={onPlayAgain}>
        Play again
      </button>
    </section>
  );
}

export default Summary;
