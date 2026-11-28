import './Writeup.css';

function Writeup() {
  return (
    <main className="writeup">
      <a href="/">Back to the game</a>
      <h1>Project Writeup</h1>

      <p>i built my project by...</p>

      <img src="/no_styling.PNG" alt="Unstyled version of the site" />
      <p>A recreation of the page before any styling, with just the content and browser defaults.</p>

      <img src="/scenario_json.png" alt="scenarios.json open in VS Code" />
      <p>All of the scenarios live in one JSON file, so they can be added or changed without touching the components.</p>

      <img src="/mobile.png" alt="The site in Chrome's phone view" />
      <p>Testing the layout on a phone screen with Chrome DevTools.</p>

      <img src="/upstash.png" alt="Vote counts in the Upstash Redis Data Browser" />
      <p>Votes are stored in Upstash Redis, with one hash of counts per scenario.</p>

      <img src="/vercel_deployment.png" alt="The production deployment on Vercel" />
      <p>The finished site deployed on Vercel from the main branch.</p>
    </main>
  );
}

export default Writeup;
