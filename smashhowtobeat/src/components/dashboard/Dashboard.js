import React, { Component } from 'react';
import Notification from './Notification';
import MatchupList from '../matchup/MatchupList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        console.log('TEST PROPS : ' + this.props);
        const { matchups, auth } = this.props;
        if (!auth.uid) return <Redirect to="/signin"></Redirect>

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
    console.log(state);
    return {
        matchups: state.firestore.ordered.matchups, 
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'matchups' }
    ])
)(Dashboard);