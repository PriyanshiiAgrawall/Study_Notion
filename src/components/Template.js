import React from "react";
import FrameImage from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
function Template({ image, Description1, Description2, setIsLogIn, title, formType }) {
    return (<div>

        <div>
            <h1>{title}</h1>
            <p>
                <span>{Description1}</span>
                <span>{Description2}</span>
            </p>

            {/* agar humara formtype signup vala hai toh signup vala form component render karo otherwise login vala form */}
            {formType === "signup" ? (<SignupForm setIsLogIn={setIsLogIn} />) : (<LoginForm setIsLogIn={setIsLogIn} />)}

            {/* or bich me pada hai of both the lines so lines will be implemented by 2 divs */}
            <div></div>
            <p>OR</p>
            <div></div>
        </div>

        <button>Sign Up with Google</button>
        <div>
            <img src={FrameImage} alt="Frame" width={558} height={504}
                loading="lazy" />
            <img src={image} alt="Students" width={558} height={490}
                loading="lazy" />
        </div>


    </div>)
}


export default Template;