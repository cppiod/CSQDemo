import React, { Component, PropTypes} from 'react'
import {
	View,
	Text,
	Picker,
	Alert,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

const Item = Picker.Item;

class MainScreen extends Component{

	constructor(props) {
    	super(props);
    	this.state ={
    		selected0: 'key0',
    		selected1: 'key1',
		    selected2: 'key2',
		    selected3: 'key3',
		    color: 'red',
		    mode: Picker.MODE_DIALOG,
    	};
	}

	onValueChange = (key: string, value: string) => {
	    const newState = {};
	    newState[key] = value;
	    this.setState(newState);
	    alert('You choose Room ' + value);
  	};

	render(){
		return(
			<View style={styles.container}>
				<View style = {styles.titleContainer}>
					<Text style={styles.title} >CSQ Chat Room</Text>
				</View>
				<View style={styles.chatRoomSelectionContainer}>
					<Text style={styles.chatRoomSelectionLabel} >Choose An Room to Join</Text>
					<Picker
						style={styles.picker}
			            selectedValue={this.state.selected0}
			            onValueChange={this.onValueChange.bind(this, 'selected0')}
			        >
			            <Item label="Chat Room 1" value="key0" />
			            <Item label="Chat Room 2" value="key1" />
			            <Item label="Chat Room 3" value="key2" />
			            <Item label="Chat Room 4" value="key3" />
		          </Picker>
				</View>

				<View style={styles.chatRoomCreationContainer}>
					<Text style={styles.chatRoomCreationLabel}>Create A new Room</Text>
					<TextInput style={styles.chatRoomCreationText}/>
					<TouchableOpacity 
						style={styles.chatRoomCreationButton}
						onPress={this.props.createChatRoom}
					>
						<Text>Create A Room</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

MainScreen.propTypes = {
	createChatRoom: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#36c4c0',
	},
	titleContainer: {
		justifyContent: 'center',
	},
	title: {
		fontSize: 30,
		fontWeight: 'bold',
		marginTop: 36,
	},

	chatRoomSelectionContainer:{
		flex:1,
		justifyContent: 'center',
	},
	chatRoomSelectionLabel:{
		fontSize: 20,
		textAlign: 'left',
	},
	picker:{
		width: 200,
		height: 150,
	},

	chatRoomCreationContainer:{
		flex:1,
		justifyContent: 'center',
	},
	
	chatRoomCreationText: {
		height: 40,
		width: 200,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#dddddd',
		backgroundColor:'#ffffff',
		paddingHorizontal: 5,
		marginTop: 10,
	},
	chatRoomCreationButton: {
		borderColor: '#333333',
		borderWidth: 1,
		borderRadius: 5,
		padding: 5,
		marginTop: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		alignItems: 'center',
	},
})

export default MainScreen