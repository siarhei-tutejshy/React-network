import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { getProfileThunk, setUserProfile } from '../../redux/state/profile-reducer';
import { useMatch } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : '21827';
        this.props.getProfileThunk(userId)
        
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



export default connect(mapStateToProps, { setUserProfile,getProfileThunk})(ProfileMatch );







