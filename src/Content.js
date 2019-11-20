import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import News from './News';
import Registration from './Registration';
import Organization from './Organization';
import Question from './Question';
import Activity from './Activity';
import ConferenceGoal from './ConferenceGoal';
import ConferenceAgenda from './ConferenceAgenda';
import Organizer from './Organizer';
import Traffic from './Traffic';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/News" component={News} />
    <Route path="/ConferenceGoal" component={ConferenceGoal} />
    <Route path="/ConferenceAgenda" component={ConferenceAgenda} />
    <Route path="/Registration" component={Registration} />
    <Route path="/Organization" component={Organization} />
    <Route path="/Organizer" component={Organizer} />
    <Route path="/Activity" component={Activity} />
    <Route path="/Traffic" component={Traffic} />
    <Route path="/Question" component={Question} />
    <Route component={Home} />
  </Switch>
);

export default Content;
