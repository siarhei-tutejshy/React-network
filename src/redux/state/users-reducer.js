import { usersAPI } from "../../DAL/api";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const FOLLOWING_IN_PROGRESS ="FOLLOWING_IN_PROGRESS"
let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 7,
    totalUsersCount: 19,
    followingInProgress: [false]
};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true };
                    }
                    return user;
                }),
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false };
                    }
                    return user;
                }),
            };

        case SET_USERS:
            console.log('users');
            return {
                ...state,
                users: [ ...action.users],
            };

        case CHANGE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.pageNumber,
            };
            case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount,
            };
            case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: [...state.followingInProgress.filter(id => id !== action.userId)],
            };
            

        default:
            return state;
    }
};
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const changeCurrentPage = (pageNumber) => ({
    type: CHANGE_CURRENT_PAGE,
    pageNumber,
});
export const setTotalUsersCount = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});
export const toggleFollowingInProgress = (isFollowing) => ({
    
        type: SET_TOTAL_USERS_COUNT,
        isFollowing,
    });

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        usersAPI.getUsers(currentPage,pageSize).then((response) => {
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(changeCurrentPage(currentPage))

            
        });

    }
}

export default usersReducer;
