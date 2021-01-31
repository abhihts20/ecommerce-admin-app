import './App.css';
import { BrowserRouter as Router , Route ,Switch } from 'react-router-dom';
import Home from './containers/Home/index';
import Signup from './containers/Signup/index';
import Signin from './containers/Signin/index';
import React from "react";
function App() {

  return (
    <div className={"dark:bg-black-500"}>
       <Router>
         <Switch>
           <Route exact={true} path="/" component={Home} />
           <Route path="/signin" component={Signin} />
           <Route path="/signup" component={Signup} />
         </Switch>
       </Router>
    </div>
  );
}

export default App;
