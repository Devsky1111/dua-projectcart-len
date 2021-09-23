import * as message_constant from './../constant/message'
import * as types from './../constant/actiontype'
var initialState = message_constant.MSG_WELLCOME
var message_reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MSG:
            return action.message
        default:
            return state
    }
}
export default message_reducer