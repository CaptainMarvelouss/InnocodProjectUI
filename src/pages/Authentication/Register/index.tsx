import { useState } from "react";
import "./index.css";
import React, { useRef } from 'react';
import { AxiosError } from "axios";
import { AuthService } from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


export function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userName, setUsername] = useState('');
    const [avatar, setAvatar] = useState('https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg') ;
    const [displayName, setDisplayName] = useState('');
    const navigate = useNavigate();
    const containerRef = useRef<HTMLDivElement>(null);


    const handleRegister = async () => { 
        try { 
             await AuthService.signup ({ 
                userName,
                password,
                email,
                avatar,
                displayName,
                confirmPassword
             });
             toast.success("Register is Successfully");
             navigate("/");

        } catch(err) { 
            console.log(err)
            toast.error("Error Register");
            }

    }
    const handleLogin = async () => {

        try {
            await AuthService.login({
                password,
                userName
            });
            navigate("/")
            console.log(userName)
        }catch(err){

        }
    }


    const handleSignUpClick = () => {
      if (containerRef.current) {
        containerRef.current.classList.add('right-panel-active');
      }
    };

    const handleSignInClick = () => {
        if (containerRef.current) {
          containerRef.current.classList.remove('right-panel-active');
        }
      };
    
    

    return (
        <div>

            <div ref={containerRef} className="container" id="container">
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input value={displayName} onChange={(e)=>{setDisplayName(e.target.value)}} type="text" placeholder="Name" />
                        <input value={userName} onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="User Name" />
                        <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email" />
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                        <input value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}} type="password" placeholder="Confirm Password" />
                        <button onClick={handleRegister} style={{marginTop: "5px"}}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1 >Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                        <span>or use your account</span>
                        <input value={userName} onChange={(e)=>{setUsername(e.target.value)}} type="username" placeholder="UserName" />
                        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder="Password" />
                        <a href="#">Forgot your password?</a>
                        <button onClick={handleLogin} >Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button  onClick={handleSignInClick} className="ghost" id="signIn">Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button onClick={handleSignUpClick} className="ghost" id="signUp" >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );


}