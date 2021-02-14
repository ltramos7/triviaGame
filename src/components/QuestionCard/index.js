import React, { Component } from 'react'

export default class QuestionCard extends Component {
    render() {
        return (
            <div>
                <div className="question-category">
                    <h1>Category</h1>
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
