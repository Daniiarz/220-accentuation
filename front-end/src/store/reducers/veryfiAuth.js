const initialState = {
    access: false,
    fail: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case "CHECK_VERIFY_SUCCESS":
            return {
                ...state,
                access: true
            };
        case "CHECK_VERIFY_FAILED":
            return {
                ...state,
                access: false,
                fail: action.error
            };
        default:
            return state;
    }
};
