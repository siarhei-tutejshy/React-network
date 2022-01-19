import React from 'react';
import * as axios from 'axios';
import Header from './Header';
import {setAuthData} from "../../redux/state/auth-reducer"
import { connect } from 'react-redux';
class HeaderContainer extends React.Component {

    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0//auth/me`,{withCredentials: true}
            )
            .then((response) => {
              
                this.props.setAuthData(response.data.data);

                
            });

    }
    
    
    render() 
        {
            return <Header {...this.props}/>}

        
};
let mapStateToProps =(state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthData}) (HeaderContainer)




