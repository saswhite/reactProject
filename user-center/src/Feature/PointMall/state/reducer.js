import * as ActionType from '../../../Redux/ActionType';

const initialState = { shopList: [] };

export default (state = initialState, payload) => {

    switch (payload.type) {
    case ActionType.LOAD_SHOP_LIST:

        return {
            ...state,
            shopList: payload.data.shopList
        };

    default:
        return state;
    }
};