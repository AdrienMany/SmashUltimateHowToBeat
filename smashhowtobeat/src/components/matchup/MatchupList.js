import React from 'react';
import MatchupSummary from './MatchupSummary';

const MatchupList = ({matchups}) => {
    console.log(matchups);
    return (
        <div className="matchup-list section">

            { matchups && matchups.map(matchup => {
                return (
                    <MatchupSummary key={matchup.id} matchup={matchup}></MatchupSummary>
                )
            }) }

        </div>
    )
}

export default MatchupList;