import './Scenario.css';

function Scenario({ scenario, chosen, onChoose, showContinue, onContinue }) {
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
          <p>No votes yet.</p>

          <h3>Analysis</h3>
          {scenario.analysis.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {chosen && showContinue && (
        <button className="scenario-continue" onClick={onContinue}>
          Continue
        </button>
      )}
    </section>
  );
}

export default Scenario;
