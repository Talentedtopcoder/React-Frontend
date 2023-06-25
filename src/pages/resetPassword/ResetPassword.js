import React from 'react'


import ResetPasswordForm from '../../components/resetPasswordForm/ResetPasswordForm'
import Layout from '../../components/layout/Layout'

const ResetPassword = () => {

    return (
        <Layout pageName='signup' form={<ResetPasswordForm />} />
    )
}

export default ResetPassword