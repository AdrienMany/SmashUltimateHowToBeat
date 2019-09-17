import React, { Component } from 'react'

export default class CreateMatchup extends Component {
    state = {
        character: '',
        opponent: '',
        matchup: '',
        link: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New matchup</h5>
                    <div className="input-field">
                        <label htmlFor="character">Your character</label>
                        <input type="text" id="character" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="opponent">The opponent</label>
                        <input type="text" id="opponent" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="matchup">Explain the matchup</label>
                        <textarea id="matchup" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="link">Link</label>
                        <input type="text" id="link" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depths-0">Send your matchup</button>
                    </div>
                </form>
            </div>
        )
    }
}
