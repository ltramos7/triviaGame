import React, { Component } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import axios from 'axios'
import QuizScreen from './components/QuizScreen/index'
import HomeScreen from './components/HomeScreen/index'



export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      triviaData : []
    }
  }

  componentDidMount(){
    axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    .then(resp => this.setState({triviaData: resp.data.results}))
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/quiz" render={() => <QuizScreen triviaData={this.state.triviaData}/>}/>
        </Router>
      </div>
    )
  }
}
