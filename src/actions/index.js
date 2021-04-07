import { COLLECT_FAITH, GAMETICK } from '../constants'
export function collectFaith(payload) {
  return { type: COLLECT_FAITH, payload }
}

export function incrementGameTick(payload) {
  return { type: GAMETICK, payload }
}
