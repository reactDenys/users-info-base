import ava from '../assets/images/photo.jpg'

const ADD_NEW_USER = 'ADD_NEW_USER'
const SET_USER_ID = 'SET_USER_ID'


const initialState = {
    users: [
        {
            userId: 1, firstname: 'Denys', lastname: 'Aksonov', email: 'react_developer@gmail.com',
            password: 'iLoveReact', birthDate: '2000-12-28', gender: 'male', ava: ava
        },
    ],
    userAuth: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            return {
                ...state,
                users: [...state.users, {userId: action.userId, ...action.data, ava: ''}]
            }
        case SET_USER_ID:
            return {
                ...state,
                userAuth: action.isAuth
            }
        default:
            return {...state}
    }
}

export const addNewUserAC = (userId, data) => ({type: 'ADD_NEW_USER', userId, data})
export const setAuthUserIdAC = (isAuth) => ({type: 'SET_USER_ID', isAuth})


export default usersReducer
