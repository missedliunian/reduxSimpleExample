import React,{Component} from "react";

class Home extends Component {

    render() {
      const {count,increase, decrease} = this.props;
      return (
        
        <div>
          Home
          <br></br>
          <span>计数:{count}</span>
          <br></br>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      );
    }
  }

export default Home;