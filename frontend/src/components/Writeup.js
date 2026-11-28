import './Writeup.css';

function Writeup() {
  return (
    <main className="writeup">
      <a href="/">Back to the game</a>
      <h1>Project Writeup</h1>

      <p>
        I built my project using the JavaScript coding language and React user-interface framework.
        Below are some snapshots of the process...
      </p>

      <img src="/no_styling.PNG" alt="Unstyled version of the site" />
      <p>The initial website before styling and other images added in.</p>

      <img src="/scenario_json.png" alt="scenarios.json open in VS Code" />
      <p>
        I built the site using the JavaScript coding language and the React framework, all inside
        of VS Code.
      </p>

      <img src="/mobile.png" alt="The site in Chrome's phone view" />
      <p>I styled using CSS and tested the website using DevTools to make sure it worked on all types of devices, including mobile.</p>

      <img src="/upstash.png" alt="Vote counts in the Upstash Redis Data Browser" />
      <p>I track a count of how many of each choice were per scenario. These selections are stored in a database called Upstash Redis.</p>

      <img src="/vercel_deployment.png" alt="The production deployment on Vercel" />
      <p>I host the website on Vercel, which runs the serverless function needed to track players' choices.</p>

      <h2>Citations</h2>
      <p>
        Homer. <em>The Odyssey</em>. Translated by Emily Wilson, W. W. Norton &amp; Company, 2018.
      </p>
    </main>
  );
}

export default Writeup;
