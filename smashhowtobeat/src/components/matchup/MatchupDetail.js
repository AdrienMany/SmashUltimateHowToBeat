import React from 'react'

const MatchupDetail = (props) => {
    const id = props.match.params.id;
    return (
        <div className="matchup-detail container section">
            <div className="card z-depths-0">
                <div className="card-content">
                    <span className="card-title">Matchup {id}</span>
                    <p>Description très longue description très longue description très longue description très longue description très longue description très longue description très longue description très longue description très longue description très longue description très longue description très longue description très longue </p>
                </div>
                <div className="card-action grey lighten-4 gre-text">
                    <div>Posted by Adrien Many</div>
                    <div>Today</div>
                </div>
            </div>
            
        </div>
    )
}

export default MatchupDetail;
