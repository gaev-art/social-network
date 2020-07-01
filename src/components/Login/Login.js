import React from "react";
import LoginReduxForm from "./LoginForm";


function Login(props) {

    const onSubmit=(formData)=>{
        console.log(formData)
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}


export default Login;