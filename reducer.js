/**
 * @description: Reducer recebe dados do Action do Component e envia um novo estado.
 * 
 * @param {State} state 
 * @param {Action} action 
 */
export default function reducer (state = {notices: [], fav: []}, action){
    
    switch (action.type) {
        case 'initial':
            return {
                ...state,
                notices: action.notices
            }
        case 'add/notice':
            return {
                ...state,
                fav :action.fav
            }
        default:
            return state;
    }
}