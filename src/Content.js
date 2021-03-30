import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const News = lazy(() => import('./News'));
const NewsDetail = lazy(() => import('./NewDetail'));
const Paper = lazy(() => import('./Paper'));
const SignUp = lazy(() => import('./SignUp'));
const CTF = lazy(() => import('./CTF'));
const Itinerary = lazy(() => import('./Itinerary'));
const Organization = lazy(() => import('./Organization'));
// const Question = lazy(() => import('./Question'));
const Information = lazy(() => import('./Information'));
const About = lazy(() => import('./About'));
const Agenda = lazy(() => import('./Agenda'));
const Organizer = lazy(() => import('./Organizer'));
const Partner = lazy(() => import('./Partner'));
const Poster = lazy(() => import('./Poster'));
const Traffic = lazy(() => import('./Traffic'));
const CampusMap = lazy(() => import('./CampusMap'));
const Accommodation = lazy(() => import('./Accommodation'));
const Travel = lazy(() => import('./Travel'));
const Session = lazy(() => import('./Session'));

const Content = () => (
  <Suspense fallback={<div />}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/News" component={News} />
      <Route path="/NewsDetail/:number" component={NewsDetail} />
      <Route path="/About" component={About} />
      <Route path="/Agenda" component={Agenda} />
      <Route path="/Itinerary" component={Itinerary} />
      <Route path="/Session" component={Session} />
      <Route path="/Paper" component={Paper} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/CTF" component={CTF} />
      <Route path="/Poster" component={Poster} />
      <Route path="/Information" component={Information} />
      <Route path="/Traffic" component={Traffic} />
      <Route path="/CampusMap" component={CampusMap} />
      <Route path="/Accommodation" component={Accommodation} />
      <Route path="/Partner" component={Partner} />
      <Route path="/Organization" component={Organization} />
      <Route path="/Organizer" component={Organizer} />
      <Route path="/Travel" component={Travel} />
      {/* <Route path="/Question" component={Question} /> */}
      <Route component={Home} />
    </Switch>
  </Suspense>
);

export default Content;
