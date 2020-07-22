const initialState = {
    logo: {},
    image: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LOGO':
            return {
                ...state,
                logo: action.data,
            };
        case 'ADD_IMAGE':
            return {
                ...state,
                image: action.data,
            };
        default:
            return state
    }
};
