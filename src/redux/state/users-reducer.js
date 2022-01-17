const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 5,
    totalUsersCount: 19,
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

        default:
            return state;
    }
};
export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersctionCreator = (users) => ({ type: SET_USERS, users });
export const currentPagectionCreator = (pageNumber) => ({
    type: CHANGE_CURRENT_PAGE,
    pageNumber,
});
export const setTotalCountActionCreator = (totalCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
});

export default usersReducer;
