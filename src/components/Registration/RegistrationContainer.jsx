import {connect} from "react-redux";
import {addNewUserAC} from "../../redux/users-reducer";
import Registration from "./Registration";


const mapStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNewUser: (userId, data) => {
            dispatch(addNewUserAC(userId, data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)