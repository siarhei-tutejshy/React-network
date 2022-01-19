const SET_AUTH_DATA = 'SET_AUTH_DATA';


let initialState = {
    id: 1,
    email: 1,
    login: 5,
    isAuth: false
    
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.auth,
                isAuth: true
                
            };

        
        default:
            return state;
    }
};
export const setAuthData = (auth) => ({ type: SET_AUTH_DATA, auth });

export default authReducer;
