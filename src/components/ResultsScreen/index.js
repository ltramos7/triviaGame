import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import { BrowserRouter as Router } from "react-router-dom";
import { Router } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';


import HomeScreen from '../HomeScreen'


export default class ResultsScreen extends Component {

    returnToHomeScreen = () => {
        return(
            <div>
                <Router>
                    <Redirect from="/quiz" to="/"/>
                    <Route exact path="/home" component={HomeScreen}/>
                </Router>
            </div>
        )
      
    }

    render() {
        
        return (
            <div>
                <h1>You scored</h1>
                <h3>"x"/10</h3>
                {/* use map to render incorrect or correct answer result cards */}                  

                {/* <button onClick={this.returnToHomeScreen}>PLAY AGAIN?</button> */}
                {/* <button onClick={()=>{this.props.history.push('/home')}}>PLAY AGAIN?</button> */}
                <Link to='/home'>
                    <button>Begin</button>
                </Link>
                
            </div>
        )
    }
}
