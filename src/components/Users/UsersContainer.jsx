import { connect } from 'react-redux';
import {
    changeCurrentPage,
    follow,
    toggleFollowingInProgress,
    getUsersThunk,
    setTotalUsersCount,
    setUsers,
    unfollow,
} from '../../redux/state/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import React from 'react';
import {usersAPI} from '../../DAL/api'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }
    onPageChange =(pageNumber) => {
       
        this.props.getUsersThunk(pageNumber, this.props.pageSize)

    }
    render() {
        return <Users {...this.props } onPageChange={this.onPageChange}/>;
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress
    };
};

export default connect(mapStateToProps, {follow,unfollow,changeCurrentPage,toggleFollowingInProgress,getUsersThunk})(UsersContainer);
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },

//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersctionCreator(users));
//         },
//         changeCurrentPage: (pageNumber) => {
//             dispatch(currentPagectionCreator(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalCountActionCreator(totalCount));
//         },
//     };
// };


