import { connect } from 'react-redux'
import { updateChatRoomName } from '../actions'
import ChatRoomScreen from '../components/ChatRoomScreen'

const mapStateToProps = (state, props) => (
	{
		chatRoomName: state.chatRoomName,
	}
)

const mapDispatchToProps = (dispatch) => (
	{
		onUpdateChatRoomName: (value) => {
			dispatch(updateChatRoomName(value))
		},
	}
)

export default connect(
	mapStateToProps,
	mapDispatchToProps,
) (ChatRoomScreen)
