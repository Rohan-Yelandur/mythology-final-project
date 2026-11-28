import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <a className="footer-writeup" href="/writeup">
          Read the project writeup
        </a>
        <div className="footer-bottom">
          <p className="footer-credit">
            Built by Rohan Yelandur for Introduction to Classical Mythology @ UT Austin, Fall 2026
          </p>
          <div className="footer-icons">
            <a
              href="https://github.com/Rohan-Yelandur/mythology-final-project"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohan-yelandur/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <img
        className="footer-image"
        src="/odysseus_sculpture.png"
        alt="Head of Odysseus, from the Sperlonga sculptures"
      />
    </footer>
  );
}

export default Footer;
