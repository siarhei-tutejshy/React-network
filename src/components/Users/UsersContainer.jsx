import { connect } from 'react-redux';
import {
    currentPagectionCreator,
    followActionCreator,
    setTotalCountActionCreator,
    setUsersctionCreator,
    unfollowActionCreator,
} from '../../redux/state/users-reducer';
import Users from './Users';
import * as axios from 'axios';
import React from 'react';
class UsersContainer extends React.Component {
    componentDidMount() {
        console.log('agai2n',this.props);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=5`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

                
            });
    }
    onPageChange =(pageNumber) => {
        this.props.changeCurrentPage(pageNumber)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=5`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
        

                console.log('again3');
            });

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
            dispatch(currentPagectionCreator(pageNumber));
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountActionCreator(totalCount));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
