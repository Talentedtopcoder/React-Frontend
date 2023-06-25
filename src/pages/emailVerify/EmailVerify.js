import React from 'react'


import Layout from '../../components/layout/Layout'
import { EmailVerifyForm } from '../../components/emailVerifyForm/EmailVerifyForm'

const EmailVerify = () => {

    return (
        <Layout pageName='signup' form={<EmailVerifyForm />} />
    )
}

export default EmailVerify