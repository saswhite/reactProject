import * as ActionType from '../../../Redux/ActionType';

const initialState = { exchangeList: [] };

export default (state = initialState, payload) => {

    switch (payload.type) {
    case ActionType.LOAD_EXCHANGE_LIST:

        return {
            ...state,
            exchangeList: payload.data.exchangeList
        };

    default:
        return state;
    }
};