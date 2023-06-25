import React from 'react'


import SignupForm from '../../components/signupForm/SignupForm'
import Layout from '../../components/layout/Layout'

const Signup = () => {

    return (
        <Layout pageName='signup' form={<SignupForm />} />
    )
}

export default Signup