import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    Switch,
    Route,
    Redirect,
    useRouteMatch
} from 'react-router-dom';

/* component */
import Sider from '../../Component/Sider/Sider';
import UserCenter from '../UserCenter/UserCenter';
import PointMall from '../PointMall/PointMall';

/* style */
import './Management.css';

/* action */
import { UserInfo } from '../Management/state/action';

export default function Management () {

    let dispatch = useDispatch();

    let { path, url } = useRouteMatch();

    const userInfo = useSelector(state => state.management.userInfo);

    useEffect(() => {

        dispatch(UserInfo());

    }, [ dispatch ]);

    return (
        <div className="manage">
            <div className="manage-container">
                <Sider userInfo={ userInfo } url={ url }></Sider>
                <div className="manage-main">
                    <Switch>
                        <Route path={ `${path}/userCenter` } exact={ true }>
                            <UserCenter></UserCenter>
                        </Route>
                        <Route path={ `${path}/pointMall` }>
                            <PointMall></PointMall>
                        </Route>
                        <Route path={ `${path}/` }>
                            <Redirect to='/management/userCenter'></Redirect>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}
