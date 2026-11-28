import './About.css';

function About({ started, onStart }) {
  return (
    <section className="about">
      <h2 className="about-heading">The Journey Ahead</h2>
      <p>
        Troy has fallen, and it is time to get home to Ithaca.
        You will encounter scenarios from Homer's <em>Odyssey</em>,
        facing the same trials and tribulations from the famous voyage.
        In some you'll act as Odysseus, and in others you will be one of his crew.
      </p>
      <img className="about-map" src="/greece_map.png" alt="Map of Odysseus' possible route home across the Mediterranean" />
      <p>
        Each scenario will present you with two choices, and you can pick whichever feels right. After you choose, you'll see
        what happened in the original story, how all other players chose, and what the choices you made mean.
      </p>
      {!started && (
        <button className="about-button" onClick={onStart}>
          Set sail
        </button>
      )}
    </section>
  );
}

export default About;
