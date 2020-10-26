import * as ActionType from '../../../Redux/ActionType';

const initialState = { userInfo: [] };

export default (state = initialState, payload) => {

    switch (payload.type) {
    case ActionType.LOAD_USERINFO:

        return {
            ...state,
            userInfo: payload.data.userInfo
        };

    default:
        return state;
    }
};