export const createMatchup = (matchup) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // ASYNC CALL
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorid = getState().firebase.auth.uid;
        firestore.collection('matchups').add({
            ...matchup,
            author: profile.username,
            authorid: authorid,
            date: new Date(),
            game: 'smash'
        }).then(() => {
            dispatch({ type: 'ADD_MATCHUP', matchup: matchup })
        }).catch((error) => {
            dispatch({ type: 'ADD_MATCHUP_ERROR', error })
        })
    }
}