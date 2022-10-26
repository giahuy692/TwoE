import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/apiRequest';
import { useDispatch } from 'react-redux';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const newUser = {
            username: username,
            password: password,
        };
        loginUser(newUser, dispatch, navigate);
    };
    return (
        <div className='containers'>
            <div className="container_login">
                <form className="form_auth">
                    <div className="container">
                        <h1 className='login-form'>Đăng nhập</h1>
                        <p className='txt_des'>Vui lòng nhập tài khoàn và mật khẩu của bạn!</p>
                    </div>

                    <div className="input-focus-effect mb_15" onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Username..."
                            id="name"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        {/* <label>Email</label> */}
                    </div>
                    <div className="input-focus-effect">
                        <input
                            type="password"
                            placeholder="Password..."
                            id="password"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {/* <label>Password</label> */}
                    </div>
                    {/* <div className="p_12 txtali_r"><a href="/register" className='btn_register'>Register</a> Here!</div> */}


                    <button className="button_login btn_auth" type="submit">Đăng nhập</button>
                    <div className='or_group'>
                        <div class="or-line"></div>
                        <div class="or-text">hoặc</div>
                        <div class="or-line"></div>
                    </div>
                    <button className="button_google" type="submit">
                        <i className="mr_10 fa-brands fa-google"></i>
                        Sign in with google
                    </button>
                    <button className="button_facebook" type="submit">
                        <i class="mr_10 fa-brands fa-facebook-f"></i>
                        Sign in with facebook
                    </button>
                    <div class="have-no-account">
                        <span>Bạn chưa có tài khoản?</span>
                        <a href="/register">Đăng ký</a>
                        <p></p>
                    </div>
                </form>
            </div>
        </div>
    );
}