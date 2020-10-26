import React from 'react';

import { useSelector } from 'react-redux';

/* style */
import './UserCenterInfo.css';

export default function UserCenterInfo () {

    const userInfo = useSelector(state => state.management.userInfo);

    console.log(userInfo);

    return (
        <div className="info">
            <div className="info-avatar">
                <img src={ userInfo.avatar } alt="" className="info-img" />
            </div>
            <div className="info-main">
                <div className="info-main-section">
                    姓名：
                    <span>{userInfo.username}</span>
                </div>
                <div className="info-main-section">
                    学校：
                    <span>{userInfo.school}</span>
                </div>
                <div className="info-main-section">
                    昵称：
                    <span>{userInfo.nickname}</span>
                </div>
                <div className="info-main-section">
                    性别：
                    <span>{userInfo.gender === 0 ? '女' : '男'}</span>
                </div>
                <div className="info-main-section">
                    密码：
                    <span>{('' + userInfo.password).replace(/./g, '*')}</span>
                    <span className="change-btn">修改</span>
                </div>
            </div>
        </div>
    );
}
