import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="App-header">Under construction</div>
      <div className="App-div">
        <OpaqueTab />
        <div style={{ margin: 100 }}>
          <GitHubLink />
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Footer = () => {
  return <div id="App-footer">Bayden White </div>;
};

const OpaqueTab = () => {
  return (
    <div className="Opaque-tab">
      <p style={{ margin: 0 }}>Welcome to my Portfolio website!</p>
      <p>Projects:</p>
      <a
        className="App-link"
        href="https://beta.civilstonks.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Civil Stonks
      </a>
    </div>
  );
};

const GitHubLink = () => {
  return (
    <Button
      variant="link"
      className="text-light"
      href="https://github.com/BaydenWhite?tab=repositories"
    >
      <FontAwesomeIcon
        icon={faGithubSquare}
        size="3x"
        color="Dodgerblue"
      ></FontAwesomeIcon>
    </Button>
  );
};
export default App;
