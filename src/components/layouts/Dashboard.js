import React from 'react'
import { Switch, Route } from 'react-router'
import Home from '../../pages/Home';
import Candidates from '../../pages/Candidates';
import Employers from '../../pages/Employers';
import JobAdverts from '../../pages/JobAdverts';
import NoMatch from '../../pages/NoMatch';
import JobAdvertDetails from '../../pages/JobAdvertDetails';
import Cv from '../../pages/Cv';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

const Dashboard = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/candidates" component={Candidates} />
        <Route path="/employers" component={Employers} />
        <Route path="/jobadverts" component={JobAdverts} />
        <Route path="/jobadvert/detail/:id" component={JobAdvertDetails} />
        <Route path="/cv/:id" component={Cv} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

export default Dashboard
