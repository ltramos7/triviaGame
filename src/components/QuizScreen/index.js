import React, { Component } from 'react'
import axios from 'axios'
import QuestionCard from '../QuestionCard';


export default class QuizScreen extends Component {

    constructor(props){
        super(props);
        this.state = {
            triviaData : [],
            randomQuestion : []
        }
    }
    
    componentDidMount(){
        axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
        .then(resp => this.setState({triviaData: resp.data.results}))
    }

    selectRandomQuestion = () => {
        let triviaData = this.state.triviaData
        
        let questionQuanity = triviaData.length
        
        let randomIndex = Math.floor(Math.random()*questionQuanity)

        let randomQuestion = triviaData.splice(randomIndex, 1) // question is also removed from array to prevent duplicate question

        this.setState({ randomQuestion: randomQuestion})
    }

    render() {
     
        return (
            <div>
                <QuestionCard/>
            </div>
        )
    }
}
