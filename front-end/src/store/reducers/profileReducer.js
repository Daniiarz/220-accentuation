const initialState = {
    profile: {},
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_PROFILE_DATA":
            return {
                ...state,
                profile: action.data
            };
        case "FAIL_PROFILE":
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
}