import React from 'react'
import './alertMessage.scss'
import {ReactComponent as Close} from '../../assets/images/close.svg'
import BgSuccess from '../../assets/images/alert-message-success.png'
import BgFail from '../../assets/images/alert-message-fail.svg'


export const AlertMessage = ({message}) => {

  
  return (
    
    <div className='alert-wrapper' style={ message === "OTP validated" ? {backgroundImage:`url(${BgSuccess})`} : message === "OTP did not match" ? {backgroundImage:`url(${BgFail})`} : null}>
        <p>{message}</p>
        <button><Close /></button>
        {/* <img src={BgSuccess} /> */}
        
    </div>
  )
}
