import React from 'react';
import './errorMessage.css'

const ErrorMessage = () => {
  return (
    <>
      <img src={process.env.PUBLIC_URL + '/img/error.jpg'} alt='error'/>
      <span>Somtheng goes wrong.</span>
    </>
  )
}

export default ErrorMessage;
