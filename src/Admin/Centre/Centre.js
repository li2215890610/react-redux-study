import React from 'react';

import { connect } from "react-redux";

import { addListItem } from "../../actions/add";

class Centre extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     
    }
  }
  
  removeListItem = (data) =>{
    console.log(data)
  }

  render() {
    let { list} = this.props;

    const listArray = list.map(( item, index)=>{
      return (
        <li key={index} onClick={this.removeListItem.bind(this,item)}>{item.value}</li>
      )
    })
    return (
      <div style={{marginTop:'20px'}}>
         {listArray}
      </div>
    );
  }
}


// connect 接受四个参数
// connect([mapStateToProps], [mapDispatchToProps])


// mapStateToProps 这个函数来指定如何把当前 Redux store树中的state 映射到展示组件的 props 中

// mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法


// 连接 redux
export default connect(({ addList}) =>{
  
  return {
    list: addList.list
  }
},(dispatch)=>{
  return {
    addListItem(payload) {
      dispatch(addListItem(payload));
    },
  }
})(Centre);
