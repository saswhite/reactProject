import React, { useState } from 'react';

/* style */
import './UserCenter.css';

/* component */
import UserCenterInfo from '../../Component/UserCenterInfo/UserCenterInfo';
import ExchangeRecords from '../../Component/ExchangeRecords/ExchangeRecords';

export default function UserCenter () {

    let [ target, setTarget ] = useState('UserCenterInfo');

    let change = (name) => {
        setTarget(name);
    };

    return (
        <div className="user">
            <div className="user-title">
                <div
                    className={ `user-title-section ${target === 'UserCenterInfo' ? 'bb' : ''}` }
                    onClick={ () => { change('UserCenterInfo'); } }>
                    个人信息</div>
                <div
                    className={ `user-title-section ${target === 'ExchangeRecords' ? 'bb' : ''}` }
                    onClick={ () => { change('ExchangeRecords'); } }>
                    兑换记录</div>
            </div >
            <div className="user-main">
                {target === 'UserCenterInfo' ? <UserCenterInfo></UserCenterInfo> : <ExchangeRecords></ExchangeRecords>}
            </div>
        </div >
    );
}
