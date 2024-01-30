import React from "react";
import signupImage from "../assets/signup.png";
import Template from "../components/Template";
function Signup({ setIsLogIn }) {
    return (

        <Template
            title="Join the millions learning to code with StudyNotion for free"
            Description1="Build skills for today, tomorrow, and beyond."
            Description2="Education to future-proof your career."
            image={signupImage}
            formType="signup"
            setIsLogIn={setIsLogIn}

        />
    )
}


export default Signup;