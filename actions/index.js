export function updateUserName(userName){
	return {
		type: 'UPDATE_USERNAME',
		userName,
	}
}

export function updatePassword(password){
	return {
		type: 'UPDATE_PASSWORD',
		password,
	}
}

export function updateChatRoomName(chatRoomName){
	return {
		type: 'UPDATE_CHATROOMNAME',
		chatRoomName,
	}
}