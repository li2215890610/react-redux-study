import React from 'react';

import { connect } from "react-redux";

import { addListItem } from "../../actions/add";

class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ""
    }
  }

  static newId = 1

  clearTime = null 

  onInputChange = (e)=>{

    console.log(this.props)
    clearTimeout( this.clearTime); 
    this.setState({
      value: e.target.value
    },()=>{
      this.clearTime = setTimeout(() => {
        if (this.state.value) {
          this.inputChangeDispatch({
            value: this.state.value,
            id: Header.newId++
          }) 
        }
      }, 500)
    })
  }

  inputChangeDispatch  = (value) =>{
    this.props.addListItem({
      ...value
    })
  }

  render() {
    let { value} = this.state;
    return (
      <div className="">
        <input value={value} onChange={ this.onInputChange}/>
      </div>
    );
  }
}


// connect 接受四个参数 https://www.redux.org.cn/docs/basics/ExampleTodoList.html
// connect([mapStateToProps], [mapDispatchToProps])



// mapStateToProps 这个函数来指定如何把当前 Redux store树中的state 映射到展示组件的 props 中

// mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法


// 连接 redux
export default connect(({ 
  list
}) =>{
  return {

  }
},(dispatch)=>{
  return {
    addListItem(payload) {
      dispatch(addListItem(payload));
    },
  }
})(Header);
