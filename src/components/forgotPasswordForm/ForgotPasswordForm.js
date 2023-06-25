import React, {useState} from 'react'
import './forgotPasswordForm.scss'

import {ReactComponent as DomainField} from "../../assets/images/domainName.svg"

import { useNavigate} from 'react-router-dom'

import axios from 'axios'

import { environment } from '../../environments/environment'

const ForgotPasswordForm = () => {
    
    const navigate = useNavigate();
    const apiBaseUrl = environment.apiBaseUrl;
    
    const [email, setEmail] = useState('');

    
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    
    const handleSubmit = (e) => {

        e.preventDefault();

        // Perform signup logic here
        if (email) {
                        
            /*axios.post(`${apiBaseUrl}/reset`, email).then((res) => {
                if (res.data.status === 'success') {
                    localStorage.clear()
                    localStorage.setItem("access-token", res.data.accessJWT)
                    localStorage.setItem("refresh-token", res.data.refreshJWT)
                    localStorage.setItem("email", user.email)
                    localStorage.setItem("phoneNumber", user.phoneNumber)
                    localStorage.setItem("isVerified", res.data.isVerified)
                    // navigate('/signup/otp')
                } else {
                    alert(res.data.message)
                    console.log("message", res.data.message)
                }
            })*/
            navigate('/signup/reset');


        } else {
            alert("Fill in all the information!")
        }
    };
    
    

    return (
        <div className='forgotPassword-wrapper'>
                
            <DomainField className='domain-field'/>
            <h1>Forgot Password</h1>
            <div className='form-content'>    
                <form onSubmit={handleSubmit}>
                    <div className='custom-form'>
                        <div className='input-group'>
                            <div className='input-row'>
                                <div className='input-unit'>
                                    <label>Enter your registered email below to receive password reset instructions</label>
                                    <input type='email' placeholder='hello@ishaare.com' value={email} onChange={handleEmailChange}></input>
                                </div>
                            </div>
                            
                        </div>                
                        <div className='signup-button'>
                            <button type='submit'>Reset Password</button>
                            <p>If you forgot your email, please <a><u>contact us.</u></a></p>
                            <h5>Go Back to <a onClick={()=>{navigate('/login')}}>Log In</a></h5>
                        </div>

                    </div>
                    
                </form>

            </div>
            
        </div>
    )
}

export default ForgotPasswordForm