import * as ActionType from '../ActionType';

const initialState = { isShow: false,id:'' };

export default (state = initialState, payload) => {

    switch (payload.type) {
    case ActionType.SHOW_MODAL:

        return {
            ...state,
            isShow: true,
            id: payload.data.id
        };
    case ActionType.HIDE_MODAL:

        return {
            ...state,
            isShow: false,
        };
    case ActionType.HIDE_EX_MODAL:

        return {
            ...state,
            isShow: false,
        };

    default:
        return state;
    }
};