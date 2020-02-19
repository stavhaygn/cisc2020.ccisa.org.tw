import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import News from './News';
import NewsDetail from './NewDetail';
import Paper from './Paper';
import SignUp from './SignUp';
import CTF from './CTF';
import Itinerary from './Itinerary';
import Organization from './Organization';
import Question from './Question';
import Information from './Information';
import ConferenceGoal from './ConferenceGoal';
import ConferenceAgenda from './ConferenceAgenda';
import Organizer from './Organizer';
import Partner from './Partner';
import Poster from './Poster';
import Traffic from './Traffic';
import Accommodation from './Accommodation';
import Travel from './Travel';
import Session from './Session';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/News" component={News} />
    <Route path="/NewsDetail/:number" component={NewsDetail} />
    <Route path="/ConferenceGoal" component={ConferenceGoal} />
    <Route path="/ConferenceAgenda" component={ConferenceAgenda} />
    <Route path="/Itinerary" component={Itinerary} />
    <Route path="/Session" component={Session} />
    <Route path="/Paper" component={Paper} />
    <Route path="/SignUp" component={SignUp} />
    <Route path="/CTF" component={CTF} />
    <Route path="/Poster" component={Poster} />
    <Route path="/Information" component={Information} />
    <Route path="/Traffic" component={Traffic} />
    <Route path="/Accommodation" component={Accommodation} />
    <Route path="/Partner" component={Partner} />
    <Route path="/Organization" component={Organization} />
    <Route path="/Organizer" component={Organizer} />
    <Route path="/Travel" component={Travel} />
    <Route path="/Question" component={Question} />
    <Route component={Home} />
  </Switch>
);

export default Content;
