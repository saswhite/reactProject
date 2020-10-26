import * as ActionType from '../../../Redux/ActionType';
import { loadExchangeList } from '../../../Request/index';

export function ExchangeList () {

    return async (dispatch) => {

        const exchangeList = await loadExchangeList();
        console.log(exchangeList);

        dispatch({ type: ActionType.LOAD_EXCHANGE_LIST, data: { exchangeList } });

    };
}