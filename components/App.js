import React, { Component } from 'react'
import {
	View,
} from 'react-native'

import SignInContainer from '../containers/SignInContainer'

class App extends Component {
	render(){
		return (
			<View>
				<SignInContainer />
			</View>
		)
	}
}

export default App