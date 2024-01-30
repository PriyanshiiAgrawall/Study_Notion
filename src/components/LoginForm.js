import React, { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [passVisible, setPassVisibility] = useState(false)

    function formDataHandler(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value

            }
        })

    }
    return (<div>
        <form>

            <label>
                <p>Email Address<sup>*</sup></p>
                <input required type="email" name="email" onChange={formDataHandler} value={formData.email} placeholder="Enter Your Email id"></input>
            </label>
            <label>
                <p>Password<sup>*</sup></p>
                <input required
                    type={passVisible ? "password" : "text"} name="password"
                    onChange={formDataHandler}
                    value={formData.password} placeholder="Enter Your password">
                </input>
                <span onClick={() => setPassVisibility((prev) => !prev)}>
                    {passVisible ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                </span>
                <Link to="#"><p>Forgot Password</p></Link>
            </label>
            <button>Sign-in</button>
        </form>

    </div >)
}


export default LoginForm;