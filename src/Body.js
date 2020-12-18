import React from 'react';
import Landing from "./bodyComponents/Landing";
import About from "./bodyComponents/About";
import Resume from "./bodyComponents/Resume";
import Portfolio from "./bodyComponents/Portfolio";
import Contact from "./bodyComponents/Contact";
import ScrollToTop from "./ScrollToTop";
import {Route, withRouter, Switch} from "react-router-dom";

const Body = () => {
    const routes = [
        {path:"/AboutMe", Component: About},
        {path:"/Resume",  Component: Resume},
        {path:"/Portfolio", Component: Portfolio},
        {path:"/ContactMe", Component: Contact},
        {path:"/Home", Component: Landing}
            ];
    return (
        <>
        <ScrollToTop/>
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
        </>
    );
};

export default withRouter(Body);