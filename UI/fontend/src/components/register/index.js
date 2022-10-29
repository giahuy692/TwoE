import React from "react";
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { registerUser } from '../../redux/apiRequest';



export default function Register() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [repeatpassword, setRepeatpassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const handleRegister = (e)=> {
        e.preventdefault();
        const newUser = {
            username: userName,
            password: password,
            name: name,
            email: email,
            pswRepeat: repeatpassword,
        };
        registerUser(newUser, dispatch, navigate);
    }
    console.log(userName, password, name,email,repeatpassword);
    return (

        <div>
            <div className='all-register'>
                <div className='auth-form'>

                    <div className='auth-form__container'>
                        <div className='auth-form__header'>
                            <h3 className='auth-form__heading'>Register</h3>
                        </div>
                        <div className='auth-form__aside'>
                            <p className='auth-form__policy-text'>
                                2E cam kết cùng bạn học xoá bỏ rào cản Anh ngữ!
                            </p>
                        </div>
                        <form onSubmit={handleRegister} className='auth-form__form'>
                            <div className='auth-form__group'>
                                <input type='text'
                                    className='auth-form__input'
                                    placeholder='Your registered name'
                                    onChange={(e) =>setUsername(e.target.value)}
                                ></input>
                            </div>
                            <div className='auth-form__group'>
                                <input type='text' className='auth-form__input' placeholder='Your email'
                                    onChange={(e) =>setEmail(e.target.value)}
                                ></input>
                            </div>
                            <div className='auth-form__group'>
                                <input type='text' className='auth-form__input' placeholder='Your name'
                                    onChange={(e) =>setName(e.target.value)}
                                ></input>
                            </div>
                            <div className='auth-form__group'>
                                <input type='password' className='auth-form__input'placeholder='Your password'
                                    onChange={(e) =>setPassword(e.target.value)}
                                ></input>
                            </div>
                            <div className='auth-form__group'>
                                <input type='password' className='auth-form__input' placeholder='Your again password'
                                    onChange={(e) =>setRepeatpassword(e.target.value)}
                                ></input>
                            </div>
                            <div className='auth-form__controls'>
                                <button type='submit' className='btn btn--primary'>MEMBER REGISTRATION</button>
                            </div>
                        </form>

                    </div>
                    <div className='auth-form__or'>
                        <p>________________________OR________________________</p>
                    </div>

                    <div className='auth-form__socials'>

                    </div>
                    <div className='login'>
                        Do you already have an account?
                        {/* <a src='' className='btn btn--login'>LOGIN</a> */}
                    </div>
                    <div className='auth-form__aside'>
                        <p className='auth-form__policy-text'>
                            When you register on 2E, you agree to our Key Terms and Privacy Policy.
                        </p>
                    </div>

                </div>
            </div>

        </div>
        
    );
}