import React, { Component } from 'react';
import Notification from './Notification';
import MatchupList from '../matchup/MatchupList';
import { connect } from 'react-redux';

class Dashboard extends Component {
    render() {
        // console.log(this.props);
        const { matchups } = this.props;

        return(
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <MatchupList matchups={matchups}></MatchupList>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notification></Notification>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        matchups: state.matchup.matchups, 
    }
}

export default connect(mapStateToProps)(Dashboard);