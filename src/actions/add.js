import { ADD_LIST_ITEM } from "../constants/add";


// 定义 dispatch 触发事件行为
export const addListItem = (payload) => {
  return {
    type: ADD_LIST_ITEM,
    payload
  }
}
