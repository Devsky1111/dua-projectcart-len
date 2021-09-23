import * as types from './../constant/actiontype'

export const addtocart_action = (product, quatity) => {
    return {
        type: types.ADD_TO_CART,
        product: product,
        quatity: quatity
    }
}   

export const changequatity_action = (indexitem, para) => {
    return {
        type: types.CHANGE_QUATITY,
        indexitem: indexitem,
        para: para
    }
}

export const changemessage_action = (message) => {
    return {
        type: types.CHANGE_MSG,
        message: message
    }
}
export const removeitems_action = (itemsneedremove) => {
    return {
        type: types.REMOVE_ITEMS,
        itemsneedremove: itemsneedremove
    }
}