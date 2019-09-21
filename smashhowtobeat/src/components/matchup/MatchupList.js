import React from 'react';
import MatchupSummary from './MatchupSummary';
import { Link } from 'react-router-dom';

const MatchupList = ({matchups}) => {
    console.log(matchups);
    return (
        <div className="matchup-list section">

            { matchups && matchups.map(matchup => {
                return (
                    <Link to={'/matchup/' + matchup.id} key={matchup.id}>
                        <MatchupSummary matchup={matchup}></MatchupSummary>
                    </Link>
                )
            }) }

        </div>
    )
}

export default MatchupList;