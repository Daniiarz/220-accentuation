const checkResponse = (response) => {
        if (!response.ok) throw response
    return response.json()
}

const errorHandler = (error) => (error.message ? error.message : error.status)

export const sendLoginPost = (body) => (dispatch) => {
    fetch("http://www.220-accentuation.co/api/users/auth/jwt/create/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        Accept: 'application/json',
        body: JSON.stringify(body)
    }).then((response) =>
        checkResponse(response, 'Ошибка загрузки'))
        .then((data) => {
            dispatch({type: 'ADD_ACCESS_TOKEN', access: data.access, refresh: data.refresh})
            window.localStorage.setItem("refresh", data.refresh)
            window.localStorage.setItem("token", data.access)
        })
        .catch((accessFail) => {
            dispatch({type: 'FAIL_ACCESS_TOKEN', error: errorHandler(accessFail)})
        })
}

export const addLoginData = (body) => ({
    type: 'ADD_LOGIN_DATA',
    name: body.name,
    data: body.data
})
export const clearLoginData = () => ({
    type: 'CLEAR_LOGIN_DATA'
})
