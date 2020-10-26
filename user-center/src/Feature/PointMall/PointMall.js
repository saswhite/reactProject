import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import _ from 'lodash';
import { v4 } from 'uuid';

/* img */
import img5 from '../../Assets/img5.png';

/* style */
import './PointMall.css';

/* action */
import { ShopList } from './state/action';
import { showModal } from '../../Redux/Action/ModalTimeout';
import { UserInfo } from '../Management/state/action';

export default function PointMall () {
    let dispatch = useDispatch();

    const shopList = useSelector(state => state.pointMall.shopList.list);

    const point = useSelector(state => state.management.userInfo.integration);

    const isShow = useSelector(state=>state.modalTimeout.isShow );

    useEffect(() => {

        dispatch(UserInfo());

    }, [ dispatch,isShow ]);

    useEffect(() => {

        dispatch(ShopList());

    }, [ dispatch ]);

    function renderData (){
        return _.map(shopList,(item)=>{
            return (
                <div className="point-main-commodity-container" key={ v4() }>
                    <div className="point-main-commodity-container-section" >
                        <img src={ item.image } alt="" className="infomation-img" />
                        <div className="title">{item.name}</div>
                        <div className="infomation">
                            <div className="infomation-point-box">
                                <img src={ img5 } alt="" className="infomation-coin" />
                                <span className="infomation-point">积分:{item.price}</span>
                            </div>
                            <button className="infomation-btn" onClick={ ()=>{
                                dispatch(showModal(item._id));
                            } }>兑换</button>
                        </div>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="point-all">
            <div className="point-header">商城</div>
            <div className="point-main">
                <div className="point-main-header">
                    <div className="point-main-header-title">当前积分</div>
                    <div className="point-main-header-point">{point}</div>
                </div>
                <div className="point-main-commodity">
                    <div className="point-main-commodity-title">商品列表</div>

                    {renderData()}

                </div>
            </div>
        </div>
    );
}

