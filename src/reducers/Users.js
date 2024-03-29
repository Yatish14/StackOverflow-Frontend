const usersReducer = (state = [], action) => {
    switch(action.type)
    {
        case 'FETCH_ALL_USERS':
            return action.payload;
        case 'UPDATE_CURRENT_USER_PROFILE':
            return state.map(elm => elm._id === action.payload._id ?  action.payload : elm)
        default:
            return state;
    }
}

export default usersReducer