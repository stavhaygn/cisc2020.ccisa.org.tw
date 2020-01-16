import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import News from './News';
import NewsDetail from './NewDetail';
import Registration from './Registration';
import CTF from './CTF';
import Itinerary from './Itinerary';
import Organization from './Organization';
import Question from './Question';
import Activity from './Activity';
import ConferenceGoal from './ConferenceGoal';
import ConferenceAgenda from './ConferenceAgenda';
import Organizer from './Organizer';
import CoOrganizer from './CoOrganizer';
import Traffic from './Traffic';
import Accommodation from './Accommodation';

const Content = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/News" component={News} />
    <Route path="/NewsDetail/:number" component={NewsDetail} />
    <Route path="/ConferenceGoal" component={ConferenceGoal} />
    <Route path="/ConferenceAgenda" component={ConferenceAgenda} />
    <Route path="/Registration" component={Registration} />
    <Route path="/CTF" component={CTF} />
    <Route path="/Itinerary" component={Itinerary} />
    <Route path="/Organization" component={Organization} />
    <Route path="/Organizer" component={Organizer} />
    <Route path="/CoOrganizer" component={CoOrganizer} />
    <Route path="/Activity" component={Activity} />
    <Route path="/Traffic" component={Traffic} />
    <Route path="/Accommodation" component={Accommodation} />
    <Route path="/Question" component={Question} />
    <Route component={Home} />
  </Switch>
);

export default Content;
