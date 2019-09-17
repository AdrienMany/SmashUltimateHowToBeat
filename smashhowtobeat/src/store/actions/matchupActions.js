export const createMatchup = (mathcup) => {
    return (dispatch, getState) => {
        // ASYNC CALL
        dispatch({ type: 'ADD_MATCHUP', matchup: matchup })
    }
}