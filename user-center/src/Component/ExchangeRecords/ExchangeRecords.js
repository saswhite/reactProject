import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import  { v4 }  from 'uuid';
import  moment from 'moment';
import _ from 'lodash';

/* action */
import { ExchangeList } from './store/action';

/* style */
import './ExchangeRecords.css';

export default function ExchangeRecords () {

    let dispatch = useDispatch();

    const exchangeList = useSelector(state => state.exchangeRecords.exchangeList.list);

    console.log(exchangeList);

    useEffect(() => {

        dispatch(ExchangeList());

    }, [ dispatch ]);

    function renderExchangeList (){
        return _.map(exchangeList,(item)=>{
            return (
                <div className="point-section-container" key={ v4() }>
                    <div className="point-section-name">{item.name}</div>
                    <div className="point-section-created">{moment(item.exchangeDate).format('llll')}</div>
                </div>
            );
        });
    }

    return (
        <div>
            {renderExchangeList()}
        </div>
    );
}
