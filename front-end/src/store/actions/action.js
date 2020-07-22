export const setId = (id) => ({
    type: 'ADD_ID',
    id,
});

export const addLogo = (data) => ({
    type: 'ADD_LOGO',
    data,
});

export const addImage = (data) => ({
    type: 'ADD_IMAGE',
    data,
});

export const setReadiness = (name, value) => ({
    type: 'ADD_READY',
    name,
    value
});

export const addNav = (data) => ({
    type: 'ADD_NAV',
    data,
});

export const addBody = (data) => ({
    type: 'ADD_BODY',
    data,
});

export const setBodyLayout = (layout) => ({
    type: 'SET_BODY_LAYOUT',
    layout
})

export const addFooter = (foot) => ({
    type: 'ADD_FOOTER',
    foot,
});
