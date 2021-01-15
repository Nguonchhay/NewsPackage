import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import { navLinks } from './../utils/constant';

import Home from './../views/pages/Home';
import News from './../views/pages/News';

const routers = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={navLinks.home} component={Home} />
                <Route path={navLinks.news} component={News} />
            </Switch>
        </Router>
    )
};

export default routers;