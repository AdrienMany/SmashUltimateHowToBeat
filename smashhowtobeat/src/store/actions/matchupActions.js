export const createMatchup = (matchup) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // ASYNC CALL
        const firestore = getFirestore();
        firestore.collection('matchups').add({
            ...matchup,
            author: 'Marion',
            date: new Date(),
            game: 'smash'
        }).then(() => {
            dispatch({ type: 'ADD_MATCHUP', matchup: matchup })
        }).catch((error) => {
            dispatch({ type: 'ADD_MATCHUP_ERROR', error })
        })
    }
}