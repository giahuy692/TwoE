import React from 'react'
import './style.css';

export default function Register() {
    return (
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
                <div className='auth-form__form'>
                    <div className='auth-form__group'>
                        <input type='text' className='auth-form__input' placeholder='Your registered name'></input>
                    </div>
                    <div className='auth-form__group'>
                        <input type='email' className='auth-form__input' placeholder='Your email'></input>
                    </div>
                    <div className='auth-form__group'>
                        <input type='password' className='auth-form__input' placeholder='Your password'></input>
                    </div>
                    <div className='auth-form__group'>
                        <input type='password' className='auth-form__input' placeholder='Your again password'></input>
                    </div>
                </div>
                <div className='auth-form__controls'>
                    <button className='btn btn--primary'>MEMBER REGISTRATION</button>
                </div>
            </div>
            <div className='auth-form__or'>
                <p>________________________OR________________________</p>
            </div>

            <div className='auth-form__socials'>
                <a href='' className='btn btn--with-icon'><img src='icons8-facebook-48.png' className='icon-img'></img> Connect Facebook</a>
                <a href='' className='btn btn--with-icon'><img src='icons8-youtube-48.png' className='icon-img'></img>Youtube channels</a>
            </div>
            <div className='login'>
            Do you already have an account?
                <a src='' className='btn btn--login'>LOGIN</a>
            </div>
            <div className='auth-form__aside'>
                <p className='auth-form__policy-text'>
                    When you register on 2E, you agree to our Key Terms and Privacy Policy.
                </p>
            </div>

        </div>
    </div>     
    );
}

