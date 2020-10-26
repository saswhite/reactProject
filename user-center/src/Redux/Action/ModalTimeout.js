import * as ActionType from '../ActionType';
/* request */
import { exchange,loadUserInfo } from '../../Request';

export function showModal (id) {

    return async (dispatch) => {

        dispatch({ type: ActionType.SHOW_MODAL ,data:{ id:id } });

    };
}

export function hideModal () {

    return async (dispatch) => {
        dispatch({ type: ActionType.HIDE_MODAL });

    };
}

export function hideExModal () {

    return async (dispatch,useState) => {
        let state = useState();
        let id = state.modalTimeout.id;
        console.log(id);
        let result = await exchange(id);
        if(result.success) {
            console.log(result);
        }
        let userInfo = await loadUserInfo();
        console.log(userInfo);
        // dispatch({ type: ActionType.LOAD_USERINFO ,data:{ userInfo:userInfo } });
        dispatch({ type: ActionType.HIDE_EX_MODAL });

    };
}