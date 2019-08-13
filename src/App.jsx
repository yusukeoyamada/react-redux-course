import React from 'react';

class App extends React.Component{
  render(){
    return(
      <Counter />
    );
  }
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

  handleIncrementButton() {
    this.setState({count: this.state.count + 1})
  }

  handleDecrementButton(){
    this.setState({count: this.state.count - 1})
  }

  render(){
    return(
      <div>
        <button onClick={this.handleIncrementButton.bind(this)}>+1</button>
        <p>count: { this.state.count }</p>
        <button onClick={this.handleDecrementButton.bind(this)}>-1</button>
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

export default App;
