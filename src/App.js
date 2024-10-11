import React, { useState , Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/demo.jsx'

function MyButton(){
  const [count , setCount] = useState(0);
    function onBtnClick(){
      // alert('You clicked me Sandesh');
      setCount(count+1)
    }
  return(
    <button onClick={onBtnClick} className="align-middle justify-center">Click {count} times </button>
  );
}


class App extends Component {
  render() {
    let b = true;
    let Component;
    if(b) Component = <MyButton/>
    else Component = <Demo/>

    

    return (
      <div>
        <h1 className="text-3xl text-center mt-10">Welcome Sandesh</h1>
        {/* {Component} */}
        {/* <MyButton/> */}
        {/* <MyButton count={count} onClick={handleClick} /> */}
      {/* <MyButton count={count} onClick={handleClick} /> */}
      </div>
    );
  }
}

export default App;
