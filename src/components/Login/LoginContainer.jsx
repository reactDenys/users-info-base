import {setAuthUserIdAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Login from "./Login";

const mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setAuthUserId: (data) => {
            dispatch(setAuthUserIdAC(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)