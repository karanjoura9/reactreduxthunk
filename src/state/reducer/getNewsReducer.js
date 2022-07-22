const GetNewsReducer = (state = {}, action) => {
    if (action.type === 'fetchnews') {
        return { ...state, loading: true }
    }
    else if (action.type === 'fetchnewssuccess') {
        return { ...state, json: action.payload, loading: false }
    }
    else if (action.type === 'fetchnewsfailure') {
        return { ...state, url:action.payload, loading: false }
    }
    else {
        return state;
    }
}

export default GetNewsReducer;