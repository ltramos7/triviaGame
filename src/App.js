import React, { Component } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import QuizScreen from './components/QuizScreen/index'
import HomeScreen from './components/HomeScreen/index'
import ResultsScreen from './components/ResultsScreen'




export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/quiz" component={QuizScreen}/>
          <Route exact path="/results" component={ResultsScreen}/>
        </Router>
      </div>
    )
  }
}
