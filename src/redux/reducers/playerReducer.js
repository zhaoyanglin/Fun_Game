const playerReducer = (state = [], action) => {
    switch (action.type) {
        case 'PLAYER_DATA':
            return state = action.payload;
        default:
            return state;
    }
};

export default playerReducer;