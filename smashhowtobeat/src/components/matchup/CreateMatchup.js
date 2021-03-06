import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMatchup } from '../../store/actions/matchupActions';
import { Redirect } from 'react-router-dom';

class CreateMatchup extends Component {
    state = {
        character: '',
        opponent: '',
        content: '',
        link: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createMatchup(this.state);
        this.props.history.push('/');
    }

    render() {
        const { auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin"></Redirect>

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">New matchup</h5>
                    <div className="input-field">
                        <input type="hidden" id="game" value="Super Smash Bros Ultimate"></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="character">Your character</label>
                        <input type="text" id="character" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="opponent">The opponent</label>
                        <input type="text" id="opponent" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Explain the matchup</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
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

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createMatchup: (matchup) => dispatch(createMatchup(matchup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMatchup);