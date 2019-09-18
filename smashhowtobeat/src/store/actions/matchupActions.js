export const createMatchup = (matchup) => {
    return (dispatch, getState) => {
        // ASYNC CALL
        dispatch({ type: 'ADD_MATCHUP', matchup: matchup })
    }
}