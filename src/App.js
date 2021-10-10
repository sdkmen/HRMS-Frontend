import './App.css';
import { BackgroundImage } from './components/BackgroundImage/style';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
} from "react-router-dom";
import Menu from './components/Navi'
import Footer from './components/Footer'
import Home from './pages/Home';
import Candidates from './pages/Candidates';
import Employers from './pages/Employers';
import JobAdverts from './pages/JobAdverts';
import JobAdvertDetails from './pages/JobAdvertDetails';
import Cv from './pages/Cv';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import JobAdvertPost from './pages/JobAdvertPost';
import NoMatch from './pages/NoMatch';
import EmployeePanel from './pages/EmployeePanel';
import { ToastContainer } from 'react-toastify';

function App() {

  const location = useLocation()
  const isPanelRendering = location.pathname.startsWith("/panel/")

  return (
    <Router>
      <BackgroundImage>
        <div className="App">
          <ToastContainer position="bottom-right"/>
        {!isPanelRendering && <Menu />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/candidates" component={Candidates} />
            <Route path="/employers" component={Employers} />
            <Route path="/jobadverts" component={JobAdverts} />
            <Route path="/jobadvert/detail/:id" component={JobAdvertDetails} />
            <Route path="/cv/:id" component={Cv} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/panel/employer/postadvert" component={JobAdvertPost} />
            <Route path="/panel/employee" component={EmployeePanel} />
            <Route component={NoMatch} />
          </Switch>
          {!isPanelRendering && <Footer />}
        </div>
      </BackgroundImage>
    </Router>
  );
}

export default App;
