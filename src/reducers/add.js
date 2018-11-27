
import { ADD_LIST_ITEM } from "../constants/add";

const INITIAL_STATE = {
  list:[]
}

export default function addList( state = INITIAL_STATE, action){
  switch (action.type) {
    case ADD_LIST_ITEM:

      let newState = [...state.list,{...action.payload}];

      return {
        list : [...newState]
      }
    default:
      return state
  }
}