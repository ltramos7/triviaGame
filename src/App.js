import React, { Component } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

import QuizScreen from './components/QuizScreen/index'
import HomeScreen from './components/HomeScreen/index'




export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        triviaData: []
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/quiz" render={() => <QuizScreen triviaData={this.state.triviaData}/>}/>
          {/* <Route path="/quiz" component={QuizScreen}/> */}
        </Router>
      </div>
    )
  }
}
