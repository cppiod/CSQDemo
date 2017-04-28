import React, { Component, PropTypes} from 'react'
import {
	View,
	Text,
	TextInput,
	ListView,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'

import ChatRoomList from './ChatRoomList'
import ChatRoomSearchHeader from './ChatRoomSearchHeader'




class ChatRoomScreen extends Component{

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.listViewContainer}>
					<Text style={styles.label}>Choose a chat room to enter:</Text>
			        <ChatRoomList />
			    </View>
			    <View style={styles.createChatRoomContainer}>
			    	<Text style={styles.label}>Or you can create a new chat room:</Text>
			        <TextInput
			          style={styles.textbox}
			          value={this.props.chatRoomName}
			          onChangeText={this.props.onChatRoomNameUpdate}
			        />
			        <TouchableOpacity 
			        	style={styles.actionButton}
			        >
			          	<Text style={styles.actionButtonText}>Create</Text>
			        </TouchableOpacity>
		 	 	</View>
			</View>
		)
	}
}

ChatRoomScreen.propTypes = {
	chatRoomName: PropTypes.string,
	onChatRoomNameUpdate: PropTypes.func.isRequired,
}

const styles = StyleSheet.create ({
	container:{
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#68b8bd',
	},
	listViewContainer:{
		flex:1,
		justifyContent:'center',
		paddingTop: 22,
	},
	separator: {
	    flex: 1,
	    height: StyleSheet.hairlineWidth,
	    backgroundColor: '#8E8E8E',
	},
	label:{
		fontSize: 18,
		marginTop: 36,
		marginBottom: 6,
		color:'#ffffff',
		fontWeight: 'bold',
	},
	createChatRoomContainer:{
		flex:1,
		justifyContent:'center',
	},
	textbox:{
		height: 40,
		width: 300,
		color:'#4d96b5',
		borderWidth: 2,
		borderColor: '#4d96b5',
		borderRadius: 6,
		backgroundColor: '#ffffff',
		paddingHorizontal: 5,
	},
	actionButton:{
		marginTop:36,
		alignSelf: 'flex-end',
		backgroundColor: '#cb2b37',
	},
	actionButtonText:{
		color: '#ffffff',
		fontSize: 24,
		fontWeight: 'bold',
		textAlign: 'center',
		marginVertical: 10,
		marginHorizontal: 20,
	},
})

export default ChatRoomScreen