export const sendRegPost = (body) => (dispatch) => {
    fetch("http://www.220-accentuation.co/api/users/auth/users/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        Accept: 'application/json',
        body: JSON.stringify(body)
    }).then((response) => {
        if (!response.ok) throw response;
        return response.json();
    })
        .then(() => {
            dispatch({type: 'REG_SUCCESS'})
        })
        .catch((accessFail) => {
            if (typeof accessFail.text === 'function') {
                accessFail.text().then(errorMessage => {
                    dispatch({type: 'FAIL_REG', error: true})
                });
            } else {
                console.log(accessFail)
            }
        })
}

export const addRegData = (body) => ({
    type: 'ADD_REG_DATA',
    name: body.name,
    data: body.data
})
