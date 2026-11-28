import { useEffect, useState } from 'react';
import './Scenario.css';

function Scenario({ scenario, chosen, onChoose, showContinue, continueText, onContinue }) {
  const [votes, setVotes] = useState({});

  useEffect(() => {
    fetch(`/api/votes?scenario=${scenario.id}`)
      .then((response) => response.json())
      .then((data) => setVotes(data))
      .catch(() => setVotes({}));
  }, [scenario.id]);

  let totalVotes = 0;
  scenario.choices.forEach((choice) => {
    totalVotes += Number(votes[choice.id] || 0);
  });

  return (
    <section className="scenario">
      <h2 className="scenario-title">{scenario.title}</h2>
      <p className="scenario-citation">{scenario.citation}</p>
      <p className="scenario-setup">{scenario.setup}</p>

      <div className="scenario-image">
        <img src={scenario.image} alt={scenario.title} />
        <p className="scenario-image-credit">{scenario.imageCredit}</p>
      </div>

      <div className="scenario-choices">
        {scenario.choices.map((choice) => (
          <button
            key={choice.id}
            className={choice.id === chosen ? 'scenario-choice selected' : 'scenario-choice'}
            onClick={() => onChoose(choice.id)}
          >
            {choice.text}
          </button>
        ))}
      </div>

      {chosen && (
        <div className="scenario-reveal">
          <h3>How others chose</h3>
          {totalVotes === 0 ? (
            <p>No votes yet.</p>
          ) : (
            scenario.choices.map((choice) => (
              <p key={choice.id}>
                {Math.round((Number(votes[choice.id] || 0) / totalVotes) * 100)}% chose "{choice.text}"
              </p>
            ))
          )}

          <h3>Analysis</h3>
          {scenario.analysis.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {chosen && showContinue && (
        <button className="scenario-continue" onClick={onContinue}>
          {continueText}
        </button>
      )}
    </section>
  );
}

export default Scenario;
