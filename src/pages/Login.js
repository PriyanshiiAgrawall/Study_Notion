import React from "react";
import Template from "../components/Template";
import loginImage from "../assets/login.png"
function Login({ setIsLogIn }) {
    return (


        <Template
            title="Welcome Back"
            Description1="Build skills for today, tomorrow, and beyond."
            Description2="Education to future-proof your career."
            image={loginImage}
            formType="login"
            setIsLogIn={setIsLogIn}
        />


    )
}


export default Login;