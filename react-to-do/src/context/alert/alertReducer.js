import { SHOW_ALERT } from "../types"
import { HIDE_ALERT } from "../types"

const handless = {
    [SHOW_ALERT]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_ALERT]: state => ({...state, visible: false}),
    DEFAULT: state => state

}

export const alertReducer = (state, action) => {
    const handle = handless[action.type] || handless.DEFAULT
    return handle(state, action)
}