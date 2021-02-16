import React, { Component } from 'react'

export default class ResultsScreen extends Component {
    render() {
        return (
            <div>
                <h1>You scored</h1>
                <h3>"x"/10</h3>
                {/* use map to render incorrect or correct answer result cards */}
                <button>PLAY AGAIN?</button>
            </div>
        )
    }
}
