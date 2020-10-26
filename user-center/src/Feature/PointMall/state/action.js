import * as ActionType from '../../../Redux/ActionType';
import { loadShopList } from '../../../Request/index';

export function ShopList () {

    return async (dispatch) => {

        const shopList = await loadShopList();

        dispatch({ type: ActionType.LOAD_SHOP_LIST, data: { shopList } });

    };
}