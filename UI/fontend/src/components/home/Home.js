import React, { useEffect } from 'react'
import img from './image/happy-kid.png';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { getAllUsers } from '../../redux/apiRequest';
import { createAxios } from '../../createInstance';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { loginSuccess } from '../../redux/authSlice';

export default function Home() {
  const user = useSelector((state) => state.auth.login?.currentUser);
  const userList = useSelector((state) => state.users.users?.allUsers);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let axiosJWT = createAxios(user, dispatch, loginSuccess);
  

  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.post("/auth/refresh", {
  //       withCredentials: true,
  //     });
  //     return res.data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // axiosJWT.interceptors.request.use(async (config) => {
  //   let date = new Date();
  //   const decodedToken = jwt_decode(user?.accessToken);
  //   if (decodedToken.exp < date.getTime() / 1000) {
  //     const data = await refreshToken();
  //     const refreshUser = {
  //       ...user,
  //       accessToken: data.accessToken,
  //     };
  //     dispatch(loginSuccess(refreshUser));
  //     config.headers["token"] = "Bearer" + data.accessToken;
  //   }
  //   return config;
  // },
  // (err) => {
  //   return Promise.reject(err);
  // }
  // );

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch, axiosJWT);
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
