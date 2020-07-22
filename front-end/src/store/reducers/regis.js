const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    success: false,
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_REG_DATA":
            return {
                ...state,
                [action.name]: action.data
            };
        case "REG_SUCCESS":
            return {
                ...state,
                success: true,
                error: false
            };
        case "FAIL_REG":
            return {
                ...state,
                error: true,
            };
        default:
            return state;
    }
}