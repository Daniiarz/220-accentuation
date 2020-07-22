const initialState = {
    body: {},
    bodyLayout: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BODY':
            return {
                ...state,
                body: action.data,
            };
        case 'SET_BODY_LAYOUT':
            return {
                ...state,
                bodyLayout: action.layout,
            };
        default:
            return state
    }
};
