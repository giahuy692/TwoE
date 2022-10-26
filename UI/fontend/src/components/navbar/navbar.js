import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/apiRequest';
// import logo from './image/logo-vlu.png';
// import {Link} from "react-router-dom";
import './navbar.css'
import { createAxios } from '../../createInstance';
import { logOutSuccess } from '../../redux/authSlice';


const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const user = useSelector((state) => state.auth.login.currentUser);
    const accessToken = user?.accessToken;
    const id = user?._id;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let axiosJWT = createAxios(user, dispatch, logOutSuccess);

    const handleLogout = () => {
        logOut(dispatch,id,navigate,accessToken, axiosJWT);
    }
    return (
        <div className="main-nav">
            <Link to="/" className="logo">
                Elearning <em>English</em>
            </Link>
            {/* <a href="/" className="logo">
                Elearning <em>English</em>
            </a> */}
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                onClick={() => setIsMobile(false)}
            >
                <Link to="/" className="nav-items">
                    Trang Chủ
                </Link>
                {/* <a href="/" className="nav-items">
                    <li>Trang Chủ</li>
                </a> */}
                <Link to="/method" className="nav-items">
                    Phương Pháp
                </Link>
                {/* <a href="/Method" className="nav-items">
                    <li>Phương Pháp</li>
                </a> */}
                <Link to="/courses" className="nav-items">
                    Khóa Học
                </Link>
                {/* <a href="/Courses" className="nav-items">
                    <li>Khóa Học</li>
                </a> */}
                <Link to="/contact" className="nav-items">
                    Liên Hệ
                </Link>
                {/* <a href="/Contact" className="nav-items">
                    <li>Liên Hệ</li>
                </a> */}
                {user ? (
                    <>
                        <p className="nav-user">Hi, <span> {user.username} </span> </p>
                        <Link to="/logout" className="btn nav-items navbar-logout" onClick={handleLogout}>
                            Đăng Xuất
                        </Link>
                        {/* <a href='/logout' className="btn nav-items navbar-logout">
                            <li>Đăng Xuất</li>
                        </a> */}
                    </>
                ) : (
                    <>
                        <Link to="/login" className="nav-login">
                            Đăng Nhập
                        </Link>
                        {/* <a href='/login' className="btn nav-items">
                            <li>Đăng Nhập</li>
                        </a> */}
                    </>
                )}

            </ul>

            <button className='mobile-menu-icon'
                onClick={() => setIsMobile(!isMobile)}
            > {isMobile ? (
                <i className='fa-solid fa-times'></i>) : (
                <i className="fa-solid fa-bars"></i>
            )}
            </button>
        </div>

    );
}

export default Navbar
