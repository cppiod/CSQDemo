import {connect} from 'react-redux'
import {updateUserName, updatePassword} from '../actions'
import SignInScreen from '../components/SignInScreen'


const mapStateToProps = (state, props) => (
	{
		userName: state.userName,
		password: state.password,
	}
)


const mapDispatchToProps = (dispatch) => (
	{
		onUserNameUpdate: (value) => {
			dispatch(updateUserName(value))
		},

		onPasswordUpdate: (value) => {
			dispatch(updatePassword(value))
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps,
) (SignInScreen)