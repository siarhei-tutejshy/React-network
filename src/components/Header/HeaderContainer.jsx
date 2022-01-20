import React from 'react';
import * as axios from 'axios';
import Header from './Header';
import {getAuthThunk, setAuthData} from "../../redux/state/auth-reducer"
import { connect } from 'react-redux';
class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthThunk()

    }
    
    
    render() 
        {
            return <Header {...this.props}/>}

        
};
let mapStateToProps =(state) =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, {getAuthThunk}) (HeaderContainer)




