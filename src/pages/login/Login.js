import React from 'react'

import Layout from '../../components/layout/Layout'

import LoginForm from '../../components/loginForm/LoginForm'

const Login = () => {
    return (
        <Layout pageName="signup" form={<LoginForm />} />
    )
}

export default Login