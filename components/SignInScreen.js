import React, { PropTypes } from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'

const SignInScreen = (props) => (

		<View style={styles.container}>
			<View style={styles.formContainer}>
				<Text style={styles.label}>User Name:</Text>
				<TextInput 
					style={styles.textbox}
					value={props.userName}
					onChangeText={props.onUserNameUpdate}
				/>
				<Text style={styles.label}>Password:</Text>
				<TextInput 
					style={styles.textbox}
					value={props.password}
					secureTextEntry={true}
					onChangeText={props.onPasswordUpdate}
				/>
				<TouchableOpacity 
					style={styles.actionButton}
					onPress={() => {goPressHandler(props.userName, props.password)}}
				>
					<Text style={styles.actionButtonText}>Login</Text>
				</TouchableOpacity>
			</View>
			<Text style={styles.externalLink}>Forgot Password</Text>
		</View>
	)

SignInScreen.propTypes = {
	userName: PropTypes.string,
	password: PropTypes.string,
	onUserNameUpdate: PropTypes.func.isRequired,
	onPasswordUpdate: PropTypes.func.isRequired,

}

const styles = StyleSheet.create ({
	container:{
		flex:1,
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#68b8bd',
	},
	formContainer:{
		flex:1,
		justifyContent:'center',
	},
	label:{
		fontSize: 20,
		marginTop: 36,
		marginBottom: 6,
		color:'#ffffff',
		fontWeight: 'bold',
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
	externalLink:{
		fontSize: 12,
		color: '#dfdfdf',
		textDecorationLine: 'underline',
		alignSelf: 'flex-start',
		marginLeft: 10,
		marginBottom: 10,
	},
})

export default SignInScreen