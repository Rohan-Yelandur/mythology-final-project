import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-credit">
        Built by Rohan Yelandur for Introduction to Classical Mythology @ UT Austin
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
    </footer>
  );
}

export default Footer;
