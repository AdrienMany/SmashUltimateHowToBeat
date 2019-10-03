import React from 'react';
import moment from 'moment';

const MatchupSummary = ({matchup}) => {
    return (
        <div className="matchup-summary card z-depths-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{matchup.character} VS {matchup.opponent}</span>
                <p>Posted by {matchup.author}</p>
                <p className="grey-text">{moment(matchup.date.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default MatchupSummary;