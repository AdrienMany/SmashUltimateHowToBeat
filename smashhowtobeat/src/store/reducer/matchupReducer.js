const initState = {
    matchups: [
        {id: '1', title: 'Bowser VS Link', content: 'blah blah blah'},
        {id: '2', title: 'Mario VS Ridley', content: 'blah blah blah'},
        {id: '3', title: 'Lucario VS Lucario', content: 'blah blah blah'}
    ]
};

const matchupReducer = (state = initState, action) => {
    return state;
}

export default matchupReducer;