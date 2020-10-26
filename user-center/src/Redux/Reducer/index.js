import { combineReducers } from 'redux';

/* page */
import management from '../../Feature/Management/state/reducer';
import pointMall from '../../Feature/PointMall/state/reducer';

/* component */
import exchangeRecords from '../../Component/ExchangeRecords/store/reducer';
import modalTimeout from './ModalTimeout';

const rootReducer = combineReducers({
    management,
    exchangeRecords,
    pointMall,
    modalTimeout
});

export default rootReducer;