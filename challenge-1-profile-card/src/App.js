import logo from './logo.svg';
import './App.css';
import Skills from "./components/Skills"
import Avatar from "./components/Avatar"
import Description from "./components/Description"

function App() {
  return (
    <div className="App">
      <div className='card'>

      {/* Image */}
      <Avatar/>

      {/* Name and Description */}
      <Description/>

      {/* Skills */}
      <Skills/>

      </div>
    </div>
  );
}

export default App;
