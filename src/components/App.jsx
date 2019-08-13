import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions/index';

class App extends React.Component {
  // reducerでやる
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     count: 0
  //   }
  // }

  // reducerでやる
  // handleIncrementButton() {
  //   this.setState({count: this.state.count + 1})
  // }

  // reducerでやる
  // handleDecrementButton(){
  //   this.setState({count: this.state.count - 1})
  // }

  render(){
    const props = this.props;
    return(
      <div>
        <button onClick={props.increment}>+1</button>
        <p>count: { props.value }</p>
        <button onClick={props.decrement}>-1</button>
      </div>
    );
  }
}

// import PropTypes from 'prop-types';

// class App extends React.Component {
//   render(){
//     const profiles = [
//       { name: "Taro", age: 10 },
//       { name: "Takeshi", age: 20 },
//     ]

//     return(
//       profiles.map((profile, index) => {
//         return(
//           <User
//             key={index}
//             name={profile.name}
//             age={profile.age}
//           />
//         )
//       })
//     );
//   };
// }

// const User = (props) => {
//   return(
//     <div>
//       Hello, I am {props.name}, My age is {props.age}
//     </div>
//   );
// }

// User.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired
// }

// class App extends React.Component {
//   render(){
//     return(
//       React.createElement(
//         "div",
//         null,
//         "Hello World!"
//       )
//     )
//   };
// }

// ここで使うstateだけ、propsにするもの
// stateにはroot_reducerに渡されたcountのvalueが入っている。
const mapStateToProps = (state) => {
  return {value: state.count.value}
}

// ここで使うdispatchだけ実行するもの。dispatchはactionのtypeごとにreducerを実行するもの。
// 引数のdispatchは関数。
const mapDispatchToProps = (dispatch) => {
  return(
    {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
    }
  )
}

// これでも可能
// const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
