import React from 'react';
// import styled from 'styled-components';
import './style.css'

const Spiner = () => {
  return(
    <div className="lds-css ng-scope">
      <div className="lds-spin">
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
        <div><div></div></div>
      </div>
    </div>
  )
}


export default Spiner;
