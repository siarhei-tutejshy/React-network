import { Navigate } from "react-router-dom"

export let AuthRedirectContainer =(Component) => {
    
    let wrapperContainer = (props) => {
        console.log(props)
        if(!props.isAuth) return <Navigate to="/login" />;

        return <Component {...props} />
    }

    return wrapperContainer
}