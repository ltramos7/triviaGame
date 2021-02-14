import React, { Component } from 'react'

export default class QuizScreen extends Component {

    selectRandomQuestion = () => {
        let triviaData = this.props.triviaData
        
        let questionQuanity = triviaData.length
        
        let randomIndex = Math.floor(Math.random()*questionQuanity)

        let randomQuestion = triviaData.splice(randomIndex, 1) // question is also removed from array to prevent duplicate question

        console.log("random question", randomQuestion)
        console.log("second round", triviaData)

    }


    render() {
        return (
            <div>
                <div className="question-category">
                    <h1>Headline Holder for Question Category</h1>
                </div>
                <div className="question-card">
                    <h1>Holder for Card containing current question</h1>
                </div>
                <div className="question-number-tracker">
                    <h1>1 of 10</h1>
                </div>

                <div className="answer-options">
                    <button onClick={this.selectRandomQuestion}>True</button>
                    <button>False</button>
                </div>
            </div>
        )
    }
}
