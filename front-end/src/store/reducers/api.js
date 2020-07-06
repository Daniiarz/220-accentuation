const initialState = {
    id: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ID':
            return {
                ...state,
                id: action.id,
            };
        default:
            return state
    }
};
