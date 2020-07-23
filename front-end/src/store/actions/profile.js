export const getProfile = () => (dispatch) => {
    fetch("", {
        method: "GET",
        headers: {"Authorization": `Bearer ${window.localStorage.getItem('token')}`},
    }).then((response) => {
        if (!response.ok) throw response;
        return response.json();
    }).then((data) => {
            dispatch({type: 'GET_PROFILE_DATA', data: data})
        })
        .catch((accessFail) => {
            if (typeof accessFail.text === 'function') {
                accessFail.text().then(errorMessage => {
                    dispatch({type: 'FAIL_PROFILE', error: true})
                });
            } else {
                console.log(accessFail)
            }
        })
}
