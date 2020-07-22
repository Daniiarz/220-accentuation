const initialState = {
    footer: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FOOTER':
            return {
                ...state,
                footer: action.foot,
            };
        default:
            return state
    }
};
