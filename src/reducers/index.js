import { COLLECT_FAITH, GAMETICK } from '../constants'

const initialState = {
  faith: 0,
  faith_max: 100,
  tick: 0,
  ted: {
    faith: 0,
    faith_max: 10,
  },
  stage1Upgrades: {},
}

function rootReducer(state = initialState, action) {
  if (action.type === COLLECT_FAITH) {
    if (state.ted.faith > 0) {
      return Object.assign({}, state, {
        faith: Math.min(state.faith + 1, state.faith_max),
        ted: { ...state.ted, faith: state.ted.faith - 1 },
      })
    }
    return state
  }
  if (action.type === GAMETICK) {
    return {
      ...state,
      tick: state.tick + 1,
      ted: {
        ...state.ted,
        faith: Math.min(state.ted.faith + 1, state.ted.faith_max),
      },
    }
  }
  return state
}

export default rootReducer
