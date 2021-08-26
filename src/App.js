import './App.css';
import Menu from './components/Navi';
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import Employers from './pages/Employers';
import JobAdverts from './pages/JobAdverts';
import NoMatch from './pages/NoMatch';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Container } from 'react-bootstrap';

function App() {
  return (    
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route path="/candidates" component={ Candidates }/>
            <Route path="/employers" component={ Employers }/>
            <Route path="/jobadverts" component={ JobAdverts }/>
            <Route component={ NoMatch }/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
