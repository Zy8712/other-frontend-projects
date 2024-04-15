import { Router, Route } from 'wouter';

import Home from './Home';

import Codewell from './project-sources/codewell/Codewell';
import Chirp from './project-sources/codewell/chirp-landing-page/ChirpLandingPage';

import './App.css'

export default function App() {

  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/codewell" component={Codewell} />
        <Route path="/codewell/chirp-landing-page" component={Chirp} />
      </Router>
    </>
  )
}

