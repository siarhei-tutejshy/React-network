import { connect } from 'react-redux';
import {
    currentPagectionCreator,
    followActionCreator,
    setTotalCountActionCreator,
    setUsersctionCreator,
    unfollowActionCreator,
} from '../../redux/state/users-reducer';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },

        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersctionCreator(users));
        },
        changeCurrentPage: (pageNumber) => {
            dispatch(currentPagectionCreator(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountActionCreator(totalCount))
        },
    };
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
