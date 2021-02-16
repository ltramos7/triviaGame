import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios'

import QuestionCard from '../QuestionCard';
import ResultsScreen from '../ResultsScreen'

export default class QuizScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            triviaData: [],
            randomQuestion: {},
            questionCount: 1,
            quizComplete: false
        }
    }      

    componentDidMount = () => {
        axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
          .then(resp => this.setState({triviaData: resp.data.results, randomQuestion: this.selectRandomQuestion(resp.data.results)}))
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.questionCount !== this.state.questionCount ){
            if(this.state.questionCount > 10){
                this.setState({quizComplete: true})
            }
        }
    }

    selectRandomQuestion = (results) => {
        let triviaData = results
    
        let questionQuanity = triviaData.length
        
        let randomIndex = Math.floor(Math.random()*questionQuanity)

        let randomQuestion = triviaData.splice(randomIndex, 1) // question is also removed from array to prevent duplicate question

        return randomQuestion[0]
    
    }

    retrieveNewRandomQuestion = () => {

        let triviaData = this.state.triviaData

        let questionQuanity = triviaData.length

        let randomIndex = Math.floor(Math.random()*questionQuanity)

        let randomQuestion = triviaData.splice(randomIndex, 1) // question is also removed from array to prevent duplicate question

        this.setState({
            randomQuestion: randomQuestion[0],
            questionCount: this.state.questionCount + 1,
         })       
    }

    checkAnswer = (event) => {
        event.target.value === this.state.randomQuestion.correct_answer ? console.log("Right") : console.log("Wrong")
    }


    checkQuizCompleteStatus = () => {
        if(this.state.triviaData.length >= 0 && this.state.randomQuestion !== undefined){
            return  <QuestionCard randomQuestion={this.state.randomQuestion} retrieveNewRandomQuestion={this.retrieveNewRandomQuestion} questionCount={this.state.questionCount} checkAnswer={this.checkAnswer} handleQuizComplete={this.handleQuizComplete}/> 
        } else{
            return  (
                <div>
                    <Router>
                        <Route exact path="/results" component={ResultsScreen}/>
                        <Redirect from="/quiz" to="/results"/>
                    </Router>
                </div>
               
            )  
        }
    }

    render() {
        return (
            <div>
                {this.checkQuizCompleteStatus()}
            </div>
        )
    }
}
