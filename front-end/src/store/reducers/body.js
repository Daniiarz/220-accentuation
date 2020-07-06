const initialState = {
    body: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BODY':
            return {
                ...state,
                body: action.data,
            };
        default:
            return state
    }
};
