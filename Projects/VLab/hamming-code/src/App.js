import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div class="logo"><img class="logo" src='/public/images/logo.png'/></div>
        <h1>V-Lab @ ANDC</h1>
        <ul class="navigation">
            <li><a href="https://www.vlab.andcollege.du.ac.in/index.html">Home</a></li>
            <li><a href="https://www.vlab.andcollege.du.ac.in/index.html#labs_section">Labs</a></li>
            <li><a href="https://www.vlab.andcollege.du.ac.in/index.html#team">Team</a></li>
            <li><a href="https://www.andcollege.du.ac.in/" target="_blank" rel="noopener noreferrer">College
                    Website</a>
            </li>
        </ul>
    </header>
    </div>
  );
}

export default App;
