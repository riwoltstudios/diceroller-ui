import React, { useState } from 'react';
import {connect, useDispatch} from "react-redux"

const mapStateToProps = state => {
    return {faith: state.faith}
}

const ConnectedResourceDisplay = ({ faith}) => {
  return (
    <div>
        <label>Faith: {faith}</label>
    </div>
  );
}
const ResourceDisplay = connect(mapStateToProps)(ConnectedResourceDisplay);
export default ResourceDisplay