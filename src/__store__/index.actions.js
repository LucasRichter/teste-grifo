
import uuid from 'uuid/v4'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const addMessage = message => {
  let obj = {
    text: message,
    id: uuid()
  }
  return {
    type: ADD_MESSAGE,
    message: obj,
  }
}