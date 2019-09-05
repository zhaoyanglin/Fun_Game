const roomReducer = (state = {}, action) => {
    switch (action.type) {
        case 'RULE_DATA':
            return state = action.payload;
        default:
            return state;
    }
};

export default roomReducer;