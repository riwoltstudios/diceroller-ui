import { COLLECT_FAITH } from "../constants"
const initialState = {
    faith: 0
};

function rootReducer(state = initialState, action) {
    if (action.type === COLLECT_FAITH) {
        return Object.assign({}, state, {
            faith: state.faith + 1
        })
    }
    return state;
}

export default rootReducer;