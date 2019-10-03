import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const MatchupDetail = (props) => {
    const { matchup, auth } = props;
    if (!auth.uid) return <Redirect to="/signin"></Redirect>

    if (matchup) {
        return (
        <div className="container section matchup-details">
            <div className="card z-depth-2">
                <div className="card-content">
                    <span className="card-title">{matchup.character} VS {matchup.opponent}</span>
                    <p>{matchup.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by {matchup.author}</div>
                    <div>{moment(matchup.date.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
        <div className="container center">
            <p>Loading matchup...</p>
        </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    const id = ownProps.match.params.id;
    const matchups = state.firestore.data.matchups;
    const matchup = matchups ? matchups[id] : null
    return {
        matchup: matchup,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'matchups'
    }])
)(MatchupDetail)
