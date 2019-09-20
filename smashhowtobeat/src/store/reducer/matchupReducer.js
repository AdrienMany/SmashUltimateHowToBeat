const initState = {
    matchups: [
        {id: '1', title: 'Bowser VS Link', content: 'blah blah blah'},
        {id: '2', title: 'Mario VS Ridley', content: 'blah blah blah'},
        {id: '3', title: 'Lucario VS Lucario', content: 'blah blah blah'}
    ]
};

const matchupReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_MATCHUP':
            console.log('add matchup: ', action.matchup);
            return state;
        case 'ADD_MATCHUP_ERROR':
            console.log('create project error: ', action.error);
            return state;
        default:
            return state;
    }
}

export default matchupReducer;