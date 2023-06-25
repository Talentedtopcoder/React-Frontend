import React from 'react'

import Layout from '../../components/layout/Layout'

import ForgotPasswordForm from '../../components/forgotPasswordForm/ForgotPasswordForm'

const ForgotPassword = () => {
    return (
        <Layout pageName="signup" form={<ForgotPasswordForm />} />
    )
}

export default ForgotPassword