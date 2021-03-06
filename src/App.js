import React, {useEffect} from "react";
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './containers/Home/index';
import Signup from './containers/Signup/index';
import Signin from './containers/Signin/index';
import PrivateRoute from "./components/HOC/PrivateRoute";
import {useDispatch, useSelector} from "react-redux";
import {isUserLoggedIn} from "./redux/actions";
import Products from "./containers/Products";
import Orders from "./containers/Orders";
import Category from "./containers/Category";

function App() {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth);

    useEffect(() => {
        if (!auth.authenticate) {
            dispatch(isUserLoggedIn())
        }
    }, []);

    return (
        <div className={"dark:bg-black-500"}>
            <Switch>
                <PrivateRoute exact={true} path="/" component={Home}/>
                <PrivateRoute path="/orders" component={Orders}/>
                <PrivateRoute path="/products" component={Products}/>
                <PrivateRoute path="/category" component={Category}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/signup" component={Signup}/>
            </Switch>
        </div>
    );
}

export default App;
