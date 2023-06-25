import './otp.scss'
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Layout from '../../components/layout/Layout'
import {ReactComponent as DomainField} from "../../assets/images/domainName.svg"

const Otp = () => {
    
    const navigate = useNavigate();

    const phoneNumber = localStorage.getItem('phoneNumber')

    const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
    const [verificationCode, setVerificationCode] = useState('');

    const inputRefs = useRef([]);

    const handleDigitInput = (event, index) => {
        const digit = event.target.value;
        
        if (digit === '') {
            setOtpDigits((prevDigits) => {
              const updatedDigits = [...prevDigits];
              updatedDigits[index] = '';
              return updatedDigits;
            });
            return;
        }

        // Validate input
        if (!/^\d$/.test(digit)) {
          event.target.value = ''; // Clear input field if invalid
          return;
        }
    
        // Update OTP digit
        setOtpDigits((prevDigits) => {
          const updatedDigits = [...prevDigits];
          updatedDigits[index] = digit;
          return updatedDigits;
        });
    
        // Move cursor to the next input field
        if (digit !== '' && index < inputRefs.current.length - 1) {
          inputRefs.current[index + 1].focus();
        }
        setVerificationCode((prevCode) => {
            const updatedCode = prevCode.slice(0, index) + digit + prevCode.slice(index + 1);
            return updatedCode;
        });
    };

    const handleRequestAgain = () => {
  
        // Send another OTP to the user's phone number
        console.log('Requesting OTP again...');
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Verification code submitted:', verificationCode);

        // if success

        navigate('/signup/namaste')
        
    }


    return (
        <Layout pageName="otp">
            <div className='otp-wrapper'>
                <DomainField />
                <form onSubmit={handleSubmit} className='otp-content'>
                    <div className='otp'>
                        <p>Code is sent to {phoneNumber ? phoneNumber : "+1 234 567 8900"}</p>
                        <div className='otp-inputs'>
                            {otpDigits.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={digit}
                                    maxLength={1}
                                    onChange={(event) => handleDigitInput(event, index)}
                                    ref={(ref) => (inputRefs.current[index] = ref)}
                                />
                            ))}
                        </div>
                        <p style={{fontWeight: "400", fontSize: "14px", color: "#797979", marginBottom: "35px"}}>
                            Didn't receive code?{' '}
                            <a href="#" onClick={handleRequestAgain} style={{ color: '#FF334D' }}>
                            Request again
                            </a>
                        </p>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                
                
            </div>
        </Layout>
    )
}

export default Otp