// import AddCart from "../../AddCart"

 export const incCart = (value) => {
    return {
        type : 'AddCart',
        payload: value
    }
}

export const decCart = (value) => {
    return {
        type : 'DecCart',
        payload: value
    }
}

export const removeCart = () => {
    return {
        type : 'RemoveCart',
        payload: null
    }
}

export const addCart = (data) => {
    return {
        type : 'AddCart',
        payload: data
    }
}
