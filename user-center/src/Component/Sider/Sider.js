import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import {
    Link
} from 'react-router-dom';

/* style */
import './Sider.css';

/* component */
import ModalTimeout from '../Modal/ModalTimeout';

export default function Sider (props) {

    let [ target, setTarget ] = useState('userCenter');

    const userInfo = useSelector(state => state.management.userInfo);

    let isClick = (name) => {
        setTarget(name);
    };

    return (
        <div className="aside">
            <div className="aside-user">
                <img src={ userInfo.avatar } alt="" className="aside-user-avatar" />
                <div className="aside-user-nickName">
                    {userInfo.nickname}
                </div>
            </div>
            <div className="aside-section-container">
                <Link to={ `${props.url}/userCenter` }
                    className={ `aside-section ${target === 'userCenter' ? 'bg' : ''}` }
                    onClick={ () => { isClick('userCenter'); } }>个人中心</Link>

                <Link to={ `${props.url}/pointMall` }
                    className={ `aside-section ${target === 'pointMall' ? 'bg' : ''}` }
                    onClick={ () => { isClick('pointMall'); } }>积分商城</Link>
            </div>
            <div className="aside-section" >
                退出
            </div>
            <ModalTimeout></ModalTimeout>
        </div >
    );
}

Sider.prototypes = {
    url : PropTypes.string
};

