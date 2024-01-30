import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
function SignupForm({ setIsLogIn }) {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
    })
    const [passVisible, setPassVisibility] = useState(false)
    const [confirmPassVisible, setConfirmPassVisibility] = useState(false)
    const navigate = useNavigate();
    function formChangeHandler(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        }
        )
    }
    function submitHandler(event) {
        event.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords Do Not Match")
            return;

        }
        setIsLogIn(true);
        toast.success("Account Created Successfully")
        navigate("/dashboard")

    }
    return (<div>
        {/* Student-Instructor TAB */}
        <div><button>Student</button></div>
        <div><button>Instructor</button></div>
        <form onSubmit={submitHandler}>
            {/* below div is for first and last name */}
            <div>
                <label>
                    <p>First Name</p>
                    <sup>*</sup>
                    <input required type="text" name="firstName" value={formData.firstName} placeholder="Enter Your First Name" onChange={formChangeHandler} />
                </label>
                <label>
                    <p>Last Name</p>
                    <sup>*</sup>
                    <input required type="text" name="lastName" value={formData.lastName} placeholder="Enter Your Last Name" onChange={formChangeHandler} />
                </label>
            </div>
            {/* below label is for email address */}
            <label>
                <p>Email</p>
                <sup>*</sup>
                <input required type="email" name="email" value={formData.email} placeholder="Enter Your Email Address" onChange={formChangeHandler} />
            </label>
            {/* below is the div for Create Password and ConfirmPassword */}
            <div>
                <label>
                    <p>Create Password</p>
                    <sup>*</sup>
                    <input
                        required
                        type={passVisible ? ("text") : ("password")} name="password" value={formData.password} placeholder="Enter Your Password" onChange={formChangeHandler} />
                    <span onClick={() => setPassVisibility((prev) => !prev)}>
                        {passVisible ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}

                    </span>
                </label>
                <label>
                    <p>Confirm Password</p>
                    <sup>*</sup>
                    <input
                        required
                        type={confirmPassVisible ? ("text") : ("password")} name="confirmPassword" value={formData.confirmPassword} placeholder="Confirm Your Password" onChange={formChangeHandler} />
                    <span onClick={() => setConfirmPassVisibility((prev) => !prev)}>
                        {confirmPassVisible ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}

                    </span>
                </label>
            </div>
            <button>Create Account</button>
        </form >


    </div >)
}







export default SignupForm;