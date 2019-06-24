import React from 'react';
import styled from 'styled-components';
import img from './error.jpg';
// import './errorMessage.css'

const ErrorMessage = () => {
  return (
    <>
      <Img src={img} alt='error'/>
      <ErrorSpan>Somtheng goes wrong.</ErrorSpan>
    </>
  )
}

export default ErrorMessage;

const Img = styled.img`
  width: 100%;
`;
const ErrorSpan = styled.span`
  color: #ffffff;
`;
