import { connect } from 'react-redux';
import * as axios from 'axios';
import React from 'react';
import Profile from './Profile';
import { getProfileThunk, setUserProfile } from '../../redux/state/profile-reducer';
import { useMatch, useParams } from "react-router-dom";
import { AuthRedirectContainer } from '../../hoc/AuthRedirect';
class ProfileContainer extends React.Component {
    componentDidMount() {
        console.log(this.props.match,'match')
        let userId = this.props.match ? this.props.match.userId : '21827';
        this.props.getProfileThunk(userId)
        console.log('did mount')
        
    }
    
    render() {
        return <Profile {...this.props } />
    }
}

const ProfileMatch = (props) => {
	let match = useParams();
    
    console.log(match, "matchparams")
	return (
		<AuthRedurect {...props} match={match} />
	)
}
let AuthRedurect = AuthRedirectContainer(ProfileContainer)
let mapStateToProps = (state) => {
    
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
       
    };
};

export default connect(mapStateToProps, { setUserProfile,getProfileThunk})(ProfileMatch );







