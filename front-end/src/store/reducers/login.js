const initialState = {
    email: "",
    password: "",
    access: null,
    refresh: null,
    fail: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_LOGIN_DATA":
            return {
                ...state,
                [action.name]: action.data
            };
        case "ADD_ACCESS_TOKEN":
            return {
                ...state,
                access: action.access,
                refresh: action.refresh,
                fail: false
            };
        case "FAIL_ACCESS_TOKEN":
            return {
                ...state,
                access: null,
                refresh: null,
                fail: action.error,
            };
        default:
            return state;
    }
}