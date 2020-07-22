const initialState = {
    logo: false,
    nav: false,
    body: false,
    footer: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_READY':
            return {
                ...state,
                [action.name]: action.value,
            };
        default:
            return state
    }
};
