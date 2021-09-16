import './App.css';
import Dashboard from './components/layouts/Dashboard';
import { BackgroundImage } from './components/BackgroundImage/style';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Menu from './components/Navi'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <BackgroundImage>
        <div className="App">
          <Menu/>
          <Dashboard/>
          <Footer/>
        </div>
      </BackgroundImage>
    </Router>
  );
}

export default App;
