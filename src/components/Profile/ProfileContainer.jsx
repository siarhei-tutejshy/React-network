import { connect } from 'react-redux';
import {
    changeCurrentPage,
    follow,
    setTotalUsersCount,
    setUsers,
    unfollow,
} from '../../redux/state/users-reducer';
import * as axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { setUserProfile } from '../../redux/state/profile-reducer';
import { useMatch } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '21827';
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/profile/${userId}`
            )
            .then((response) => {
                this.props.setUserProfile(response.data);
                
            });
    }
    
    render() {
        return <Profile {...this.props } />
    }
}
const ProfileMatch = (props) => {
	let match = useMatch("/profile/:userId/");
	return (
		<ProfileContainer {...props} match={match} />
	)
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    };
};



export default connect(mapStateToProps, { setUserProfile })(ProfileMatch );







