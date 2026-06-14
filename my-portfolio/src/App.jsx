import "./App.css";
import profileImage from "./assets/profile-image.jpg";

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={profileImage} alt="Profile" className="profile-image" />

        <h1>Laura Ezurike</h1>
        <p className="title">Bad-ass Developer</p>

        <a
          href="https://github.com/vortiq190-cmyk"
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          My GitHub
        </a>
      </div>
    </div>
  );
}

export default App;