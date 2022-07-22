import React, { Component } from "react";
import "./App.css"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  handleIncreaseCount = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count + 1})
  }
  handleDecreaseCount = (e) => {
    e.preventDefault();
    this.setState({count: this.state.count - 1 })
  }
  render() {
    return (
      <div className="count--body">
        <h1 className="count-header">
          Count: {this.state.count}
        </h1>
        <button className="increment-btn" onClick={this.handleIncreaseCount}>Increase</button>
        <button className="decrement-btn" onClick={this.handleDecreaseCount}>Decrease</button>
      </div>
    )
  }
 }
export default App;
// export default class App extends Component{
//    constructor(props) {
//     super()
//      this.state = {
//        firstName: "Stephen",
//        age: 30
//      };
//    }
//   updateName = () => {
//     this.setState({
//       firstName:  "Austin",
//       age: this.state.age +2
//     });
//   }
//   render() {
//     return (
//       <h1 onClick={this.updateName}>Hello I am {this.state.firstName} {this.state.age} years</h1>
//     );
//  }
// }