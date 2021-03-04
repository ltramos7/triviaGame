import React, { Component } from 'react'

export default class QuestionCard extends Component {
    render() {
        return (
            <div className="question-card">
                <div className="question-category">
                   <h1>{this.props.randomQuestion.category}</h1> 
                </div>

                <div className="actual-question" >
                    <h1 dangerouslySetInnerHTML={{__html: this.props.randomQuestion.question}}></h1>
                </div>

                <div className="question-number-tracker">
                    <h1>{this.props.questionCount} of 10</h1>
                </div>

                <div className="answer-options">
                    <button value="True" onClick={(event) => {this.props.retrieveNewRandomQuestion(); this.props.checkAnswer(event);}}>True</button>
                    <button value="False" onClick={(event) => {this.props.retrieveNewRandomQuestion(); this.props.checkAnswer(event);}}>False</button>
                </div>
            </div>
        )
    }
}
