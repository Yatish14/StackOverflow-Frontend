import * as api from '../api'

export const fetchAllUsers = () => async (dispatch) => {
    try
    {
        const { data } = await api.getAllUsers()
        dispatch({ type: 'FETCH_ALL_USERS', payload: data})
    }
    catch(err)
    {
        console.log(err)
    }
}
export const updateProfile = (id, updatedData) => async (dispatch) => {
    try
    {
        const { data } = await api.updateProfile(id, updatedData)
        dispatch({ type: 'UPDATE_CURRENT_USER_PROFILE', payload: data})
    }
    catch(err)
    {
        console.log(err)
    }
}