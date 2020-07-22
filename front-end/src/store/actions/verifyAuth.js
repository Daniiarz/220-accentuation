const checkResponse = (response, errText) => {
    if (!response.ok) throw new Error(errText)
    return response.json()
}

const errorHandler = (error) => (error.response ? error.response.data : error.message)

export const checkVerifyAuth = () => (dispatch) => {
    fetch("http://www.220-accentuation.co/api/users/auth/jwt/verify/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        Accept: 'application/json',
        body: JSON.stringify({
            "token": `${window.localStorage.getItem('token')}`
        })
    }).then((response) =>
            checkResponse(response, 'Ошибка загрузки'))
        .then(() => {
            dispatch({type: 'CHECK_VERIFY_SUCCESS'})
        })
        .catch((verifyFail) => {
            dispatch({type: 'CHECK_VERIFY_FAILED', error: errorHandler(verifyFail)})
        })
}
