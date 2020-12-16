import React from 'react';
import Landing from "./bodyComponents/Landing";
import About from "./bodyComponents/About";
import Resume from "./bodyComponents/Resume";
import Portfolio from "./bodyComponents/Portfolio";
import Clients from "./bodyComponents/Clients";
import {BrowserRouter as Route, Switch, withRouter, useHistory} from "react-router-dom";

const Body = () => {
    let history = useHistory();
    const changeUrl = (url)=>{
        history.push(url)
    }
    return (
        <Switch>
        <Route path='/AboutMe'>
            <About/>
        </Route>
        <Route path='/Resume'>
            <Resume/>
        </Route>
        <Route path='/Portfolio'>
            <Portfolio/>
        </Route>
        <Route path='/ContactMe'>
            <Clients/>
        </Route>
        <Route path='/'>
            <Landing changeUrl={changeUrl}/>
        </Route>
        </Switch>
    );
};

export default withRouter(Body);