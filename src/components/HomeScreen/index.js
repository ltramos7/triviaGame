import React, { Component } from 'react'

export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to the Trivia Challenge!</h1>

                <p>You will be presented with 10 True or False Questions</p>

                <p>Can you score 100%?</p>

                <button>Begin</button>
            </div>
        )
    }
}
