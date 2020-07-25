export const getProfile = () => (dispatch) => {
    fetch("http://www.220-accentuation.co/api/users/profile", {
        method: "GET",
        headers: {"Authorization": `Bearer ${window.localStorage.getItem('token')}`},
    }).then((response) => {
        if (!response.ok) throw response;
        return response.json();
    }).then((data) => {
            dispatch({type: 'GET_PROFILE_DATA', data})
        })
        .catch((accessFail) => {
            if (typeof accessFail.text === 'function') {
                accessFail.text().then(errorMessage => {
                    dispatch({type: 'FAIL_PROFILE', error: true})
                    console.log(errorMessage)
                });
            } else {
                console.log(accessFail)
            }
        })
}
