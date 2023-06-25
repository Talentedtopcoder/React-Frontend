import React, {useState} from 'react'
import './otp.scss'
import { useNavigate } from 'react-router-dom'
import Layout from '../../components/layout/Layout'
import {ReactComponent as DomainField} from "../../assets/images/domainName.svg"

const MobileNumber = () => {
    const navigate = useNavigate();

    const [countryCode, setCountryCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleCountryCodeChange = (e) => {
        const countryCodeInput = e.target.value;
        let countryCodeValidated = countryCodeInput.replace(/\D/g, ''); // Remove non-digit characters
    
        // Add "+" sign if missing
        if (!countryCodeValidated.startsWith('+')) {
          countryCodeValidated = '+' + countryCodeValidated;
        }
    
        setCountryCode(countryCodeValidated);
    };

    const handlePhoneNumberChange = (e) => {
        const phoneNumberInput = e.target.value;
        const phoneNumberValidated = phoneNumberInput.replace(/\D/g, ''); // Remove non-digit characters
        setPhoneNumber(phoneNumberValidated);
    };


    const handleSubmit = () => {
        console.log("submit mobile number");
        
    }
    const handleCancel = () => {
        navigate('/signup')
    }
    return (
        <Layout pageName="otp">
            <div className='otp-wrapper'>
                <DomainField />
                <form onSubmit={handleSubmit} className='otp-content'>
                    <div className='otp'>
                        <p>Please enter your phone number</p>
                        <div className='phone-number'>
                            <input type='text' placeholder='+91' style={{width: "60px", marginRight: "8px"}} value={countryCode} onChange={handleCountryCodeChange}></input>
                            <input type='text' placeholder='8200490767' value={phoneNumber} onChange={handlePhoneNumberChange}></input>
                        </div>
                        <p style={{fontWeight: "400", fontSize: "14px", color: "#797979", marginBottom: "35px"}}>
                            You will receive a 4 digit code
                        </p>
                        <button type='submit'>Continue</button>
                        <a onClick={handleCancel}>cancel</a>
                    </div>
                </form>
                
                
            </div>
        </Layout>
    )
}

export default MobileNumber