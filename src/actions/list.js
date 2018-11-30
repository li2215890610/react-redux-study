import { ADD_LIST_ITEM, REMOVE_LIST_ITEM } from "../constants/list";


// 定义 dispatch 触发事件行为
export const addListItem = (payload) => {
  return {
    type: ADD_LIST_ITEM,
    payload
  }
}

export const removeListItem = (payload) =>{
  return {
    type: REMOVE_LIST_ITEM,
    payload
  }
}