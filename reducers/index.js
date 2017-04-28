import  { combineReducers } from 'redux'

function userName(state = '', action){
	switch (action.type){
	case 'UPDATE_USERNAME':
		return action.name
	default: 
		return state
	}
}

function password(state = '', action){
	switch (action.type){
	case 'UPDATE_PASSWORD':
		return action.password
	default: 
		return state
	}
}

function chatRoomName(state='', action){
	switch(action.type){
	case 'UPDATE_CHATROOMNAME':
		return action.chatRoomName
	default:
		return state
	}
}

const CSQReducers = combineReducers({
	userName,
	password,
	chatRoomName,
})

export default CSQReducers