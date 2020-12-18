import React from 'react';
import {CSSTransition} from 'react-transition-group';
import Footer from "./Footer";
import Landing from "./bodyComponents/Landing";
import About from "./bodyComponents/About";
import Resume from "./bodyComponents/Resume";
import Portfolio from "./bodyComponents/Portfolio";
import Clients from "./bodyComponents/Clients";
import {Route, withRouter, Switch, useHistory} from "react-router-dom";

const Body = () => {
    const routes = [
        {path:"/AboutMe", Component: About},
        {path:"/Resume",  Component: Resume},
        {path:"/Portfolio", Component: Portfolio},
        {path:"/ContactMe", Component: Clients},
        {path:"/Home", Component: Landing}
            ];
    return (
        <Switch>
        {routes.map(({path, Component})=>(
            <Route key={path} exact path={path}>
                <Component />
            </Route>
        ))}
        <Route exact path="/">
            <Landing/>
        </Route>
        </Switch>
    );
};

export default withRouter(Body);