import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'
import QuizScreen from './components/QuizScreen/index'
import HomeScreen from './components/HomeScreen/index'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/quiz" component={QuizScreen}/>
        </Router>
      </div>
    )
  }
}


// function App() {
//   return (
    
//       <Router>
//         <Route exact path="/" component={HomeScreen}/>
//         <Route path="/quiz" component={QuizScreen}/>
//       </Router>
    
//   );
// }

// export default App;
