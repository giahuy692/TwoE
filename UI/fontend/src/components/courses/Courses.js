import React from 'react'
import img from './image/happy-kid.png';
import './courses.css';
import { Link } from "react-router-dom";

export default function Courses() {
  return (
    <div className="main-content">
      <div className="library-container">
        <div className="library-content">
          <div className="library-header">
            <div className="library-header-content">
              <div className="right">
                <img className='home-img' src={img} alt="" />
              </div>
              <div className="left">
                <h1>Chào mừng bạn đến với Elearning English</h1>
                <h2>500+ khóa học tiếng anh theo chủ đề</h2>
                <h2>Giúp bạn xây dựng nền tảng vững chắc và phát triển toàn diện 4 kỹ năng Anh ngữ.</h2>
                <Link to="/login" className="ui-button-longer link-register">
                  Bắt đầu ngay với khóa học!
                </Link>
              </div>

              <div className='clearfix'></div>
            </div>
            {/* <div className="home-cloud">
              <div className="home-cloud-bg"></div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}
