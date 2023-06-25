import React, {useState} from 'react'
import {ReactComponent as DomainField} from "../../assets/images/domainName.svg"
import {ReactComponent as MessageIcon} from "../../assets/images/message-icon.svg"
import {ReactComponent as Verified} from "../../assets/images/Verified.svg"
import './emailVerifyForm.scss'

export const EmailVerifyForm = () => {

    // const email = localStorage.getItem('email');
    const email = "puneet@ishaare.com"
    const [newEmail, setNewEmail] = useState('');
    const [changeEmail, setChangeEmail] = useState(false)
    const [isEmailVerified, setIsEmailVerified] = useState(false)
    const handleChangeEmail = () => {

    }
    const handleContinue = () => {

    }
  
    return (
        <div className='email-verify-form'>
            <DomainField className='domain-field'/>
            <h1>Email Verification</h1>
            
            <div className='form-content'>    
                <div className='announcement'>
                    {
                        !isEmailVerified ? 
                            <h5>Click on the link sent to <MessageIcon className='icon'/></h5> :
                            <h5>Successfully verified <Verified /></h5>
                    }
                    
                    <p>{email}</p>

                </div>
                <div className='greeting'>
                    <div className='greeting-content'>
                    Thanks 🙌🏻 for helping us secure this platform - Ishaare Dev team
                    </div>
                </div>
                { 
                    !isEmailVerified ? 
                        <div className='recend'>
                            <h5>Did not receive</h5>
                            <button>Recend OTP</button>
                            <p>Or <a onClick={()=>setChangeEmail(true)}>Change email</a></p>
                            {
                                changeEmail && <div className='change-email'>
                                    <input type='email' value={newEmail} placeholder='XYZ@gmail.com' onChange={(e)=>setNewEmail(e.target.value)} />
                                    <MessageIcon className='change-icon' onClick={handleChangeEmail}/>
                                </div>
                            }
                        </div> : 
                        <div className='recend'>
                            <button onClick={handleContinue}>Continue</button>
                        </div>
                }
            </div>
        </div>
  )
}
