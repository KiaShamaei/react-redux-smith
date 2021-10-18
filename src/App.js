import React from 'react';
import { connect } from 'react-redux';

import "./App.css"

class App extends React.Component {
  // state={
  //   age : 20
  // }
  // onAdd = ()=>{
  //   this.setState({...this.state , age : this.state.age+1})
  // }
  // onSub = ()=>{
  //   this.setState({...this.state , age  : this.state.age -1})
  // }
  render() {
    return (
      <div className="App">
        <h2>Test State : {this.props.age} </h2>
        <button onClick={this.props.add}>Add</button>
        <button onClick={this.props.sub}>Sub</button>
        <div>
          <ul>
            {this.props.history.map(el=>{
              return <li 
              className="listItem"
              onClick={()=>this.props.del(el.id)}
              key={el.id}
              >{el.age}</li>
            })}
          </ul>

        </div>
      </div>

    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    add: () => dispatch({ type: 'ADD', value: 1 }),
    sub: () => dispatch({ type: 'SUB', value: 1 }),
    del: (id) => dispatch({ type: 'DEL', key: id })
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age ,
    history : state.history
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
