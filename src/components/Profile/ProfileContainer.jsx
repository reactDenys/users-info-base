import {setAuthUserIdAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Profile from "./Profile";

const mapStateToProps = (state) => {
    return {
        userAuth: state.userPage.userAuth,
        users: state.userPage.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserId: (isAuth) => {
            dispatch(setAuthUserIdAC(isAuth))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)