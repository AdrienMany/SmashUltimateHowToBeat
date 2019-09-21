import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const MatchupDetail = (props) => {
    const { matchup } = props;
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
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
        )
    } else {
        return (
        <div className="container center">
            <p>Loading project...</p>
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
        matchup: matchup
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'matchups'
    }])
)(MatchupDetail)
