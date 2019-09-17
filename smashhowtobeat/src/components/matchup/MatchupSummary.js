import React from 'react';

const MatchupSummary = ({matchup}) => {
    return (
        <div className="matchup-summary card z-depths-0">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{matchup.title}</span>
                <p>Posted by AdrienMany</p>
                <p className="grey-text">Date</p>
            </div>
        </div>
    )
}

export default MatchupSummary;