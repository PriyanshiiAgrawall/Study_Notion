import React from "react";
import logo from "../assets/Logo.svg"
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar(props) {
    let isLoggedIn = props.isLoggedIn
    let setIsLogIn = props.setIsLogIn
    return (<div>

        <Link to="/">
            <img src={logo} alt="Logo" width={160} height={32} loading="lazy" />


        </Link>
        <nav>
            <ul className="flex gap-3">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        {/* we need to create 4 buttons - Login,Dashboard,Signup,Logout */}

        <div>{!isLoggedIn &&
            <Link to='/login'>
                <button>Login</button>
            </Link>
        }
            {!isLoggedIn &&
                <Link to='/signup'>
                    <button >Signup</button>
                </Link>}

            {isLoggedIn &&
                <Link to='/dashboard'>
                    <button>Dashboard</button>
                </Link>
            }

            {/* home par hi toh jaoge logout par click karkar */}
            {isLoggedIn &&
                < Link to='/'>
                    <button onClick={() => {
                        setIsLogIn(false)
                        toast.success("Logged Out")
                    }}>Logout</button>
                </Link>
            }
        </div>


    </div >)
}


export default Navbar;