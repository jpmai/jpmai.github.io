import * as types from '../../constants/ActionTypes'

const initialState = {
  category: ''
}

const main = (state = initialState, action) => {
  switch (action.type) {
    case types.SWITCH_CATEGORY:
      return {
        ...state,
        category: action.category
      }
    default:
      return state
  }
}

export default main
