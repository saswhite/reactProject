import * as ActionType from '../../../Redux/ActionType';
import { loadUserInfo } from '../../../Request/index';

export function UserInfo () {

    return async (dispatch) => {

        const userInfo = await loadUserInfo();

        dispatch({ type: ActionType.LOAD_USERINFO, data: { userInfo } });

    };
}