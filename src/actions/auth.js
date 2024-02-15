import * as api from '../api'
import { setCurrentUser } from './CurrentUser'

const error_url = "Error: Request failed with status code "

export const signup = ( authData, navigate) => async (dispatch) => {
    try
    {
        const { data } = await api.signUp(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    }
    catch(err)
    {
        console.log(err)
    }
}
export const login = ( authData, navigate) => async (dispatch) => {
    try
    {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate('/')
    }
    catch(error)
    {
        if (error.response && error.response.status === 404) {
            alert("User doesn't exist.");
        } else if (error.response && error.response.status === 400) {
            alert("Invalid credentials");
        } else {
            alert("Something went wrong. Try again!");
        }
        console.log(error);
    }
}