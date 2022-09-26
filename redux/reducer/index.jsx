const initValue = { value: '默认值' }
export const rootReducer = (state = initValue, action) => {
    console.log('statestate', Object.assign({}, action,state));
    switch (action.type) {
        case 'SEND_ACTION':
            return Object.assign({}, action,state);
            case 'MOVIE_ACTION':
                return Object.assign({}, action,state);
        default:
            return state;
    }
}