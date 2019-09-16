import React from 'react';
import MatchupSummary from './MatchupSummary';

const MatchupList = () => {
    return (
        <div className="matchup-list section">

            <MatchupSummary></MatchupSummary>
            <MatchupSummary></MatchupSummary>
            <MatchupSummary></MatchupSummary>

        </div>
    )
}

export default MatchupList;