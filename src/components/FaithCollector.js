import React, { useState } from 'react';
import {connect, useDispatch} from "react-redux"
import {collectFaith} from "../actions/index"
const mapStateToProps = state => {
    return {faith: state.faith}
}
const ConnectedFaithCollector = ({ faith}) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const dispatch = useDispatch()
  return (
    <div>
      <p>You clicked2 {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => dispatch(collectFaith())}>Second Button</button>
      <p>{faith}</p>
    </div>
  );
}
const FaithCollector = connect(mapStateToProps)(ConnectedFaithCollector);
export default FaithCollector