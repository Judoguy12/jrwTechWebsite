import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
    return (
    <footer className="site-footer mt-auto py-5 text-center">
      <Container>
        {props.children}
         <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/judoguy12"
          aria-label="My GitHub"
        > <span className="badge bg-light text-dark">
            Jamie Waters
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        <p>
          <small className="text-muted text-center">
            Project code is open source. Feel free to fork and make your own
            version.<br />
            <a href="https://drive.proton.me/urls/S03HJFEKF8#oi0YcXXqT3HW">Privacy Policy</a>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
