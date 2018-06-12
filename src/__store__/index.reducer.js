import { ADD_MESSAGE } from "./index.actions";

const initialState = {
  messages: []
}

export default function( state=initialState, action ) {
  switch ( action.type ) {
    case ADD_MESSAGE: {
      state.messages.push( action.message )
      return state
    }
    default:
      return state
  }
}