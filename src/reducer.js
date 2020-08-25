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
                fav: action.fav
            }
        case 'change/notice':
            return {
                ...state,
                notices: action.notices
            }
        case 'remove/notice':
            let newList = state.fav.filter((e) => {
                if (e.title != action.favToRemove) return true
            })
            return {
                ...state,
                fav: newList
            }
        default:
            return state;
    }
}