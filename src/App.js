import './App.css';
import Menu from './components/Navi';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import Employers from './pages/Employers';
import JobAdverts from './pages/JobAdverts';
import NoMatch from './pages/NoMatch';
import JobAdvertDetails from './pages/JobAdvertDetails';
import Cv from './pages/Cv';
import { BackgroundImage } from './components/BackgroundImage/style';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <BackgroundImage>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/candidates" component={Candidates} />
            <Route path="/employers" component={Employers} />
            <Route path="/jobadverts" component={JobAdverts} />
            <Route path="/jobadvert/detail/:id" component={JobAdvertDetails} />
            <Route path="/cv/:id" component={Cv} />
            <Route component={NoMatch} />
          </Switch>
          <Footer />
        </div>
      </BackgroundImage>
    </Router>
  );
}

export default App;
