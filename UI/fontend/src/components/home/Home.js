import React, { useEffect } from 'react'
import img from './image/happy-kid.png';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
// import jwt_decode from "jwt-decode";
import { getAllUsers } from '../../redux/apiRequest';
import { createAxios } from '../../createInstance';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
import { loginSuccess } from '../../redux/authSlice';

export default function Home() {
<<<<<<< HEAD
  const user = useSelector((state) => state.auth.login?.currentUser);
  // const userList = useSelector((state) => state.users.users?.allUsers);
  
=======
  const user = useSelector((state) => state.auth.login.currentUser);

>>>>>>> 4e37750a770f107e5b13706d82a259aa12e346c0
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user.accessToken) {
      getAllUsers(user.accessToken, dispatch, axiosJWT);
    }
  }, []);
  return (
    <>
      <div className="home-top">
        <div className="home-top-content">
          <div className="home-welcome">
            <img className='home-img' src={img} alt="EnglishEdu" />
          </div>
          <h6>Chào mừng bạn đến với Elearning English</h6>
          <h1 className="ui-heading">Hệ thống học tiếng anh thông minh</h1>

          <Link to="/login" className="ui-button-longer link-register">
            Bạn là người mới? Bắt đầu ngay!
          </Link>
          <Link to="/courses" className="ui-button-longer link-premium">
            Xem thư viện khóa học
          </Link>
          {/* <a href="/login" className="ui-button-longer link-register">Bạn là người mới? Bắt đầu ngay!</a>
          <a href="/courses" className="ui-button-longer link-premium">Xem thư viện khóa học</a> */}
        </div>
      </div>
      <div className="home-cloud">
        <div className="home-cloud-bg"></div>
      </div>
    </>
  )
}
