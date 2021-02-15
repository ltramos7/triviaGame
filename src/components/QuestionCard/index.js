import React, { Component } from 'react'

export default class QuestionCard extends Component {

    
    render() {
        return (
            <div className="question-card">
                <div className="question-category">
                   <h1>{this.props.randomQuestion.category}</h1> 
                </div>
                <div className="actual-question">
                    <h1>{this.props.randomQuestion.question}</h1>
                </div>
                <div className="question-number-tracker">
                    <h1>1 of 10</h1>
                </div>

                <div className="answer-options">
                    <button>True</button>
                    <button>False</button>
                </div>
            </div>
        )
    }
}
