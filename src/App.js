import logo from './logo.svg';
import './App.css';
import { NavBar } from './Components/Navbar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './Components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
    </div>
  );
}

export default App;
