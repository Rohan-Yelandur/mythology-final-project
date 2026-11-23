import { FaGithub, FaLinkedin } from 'react-icons/fa';
import DitherVeil from './DitherVeil';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-info">
        <blockquote className="footer-quote">
          <p>"Tell me about a complicated man."</p>
          <cite><em>Od.</em> 1.1 | All citations from Emily Wilson's translation of Homer's Odyssey</cite>
        </blockquote>
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
      <div className="footer-image">
        <DitherVeil src="/odysseus_sculpture.png" inkColor="#000000" paperColor="#f1e6cf" />
      </div>
    </footer>
  );
}

export default Footer;
