const initialState = {
    nav: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NAV':
            return {
                ...state,
                nav: action.data,
            };
        default:
            return state
    }
};
