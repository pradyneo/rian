import React from 'react';
import HomePage from "./HomePage.jsx";
import {Switch, Route} from 'react-router-dom';
import Gallery from './Gallery.jsx';
import LiveStream from './LiveStream.jsx';

const Routes = () => (
    <Switch>
        <Route exact path="/"><HomePage /></Route>
        <Route path="/gallery"><Gallery/></Route>
        <Route path="/livestream"><LiveStream/></Route>
    </Switch>
)

export default Routes;