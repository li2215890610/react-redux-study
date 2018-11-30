
import { ADD_LIST_ITEM, REMOVE_LIST_ITEM } from "../constants/list";

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

    case REMOVE_LIST_ITEM:
      let list = state.list
      
      list.map(( item, index)=>{
        if (item.id === action.payload.id) {
          list.splice( index, 1)
          // list.slice(index,1)
        }
      })
      return {
        list:[...list]
      }
    default:
      return state
  }
}