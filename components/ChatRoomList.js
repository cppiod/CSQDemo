import React, { Component, PropTypes } from 'react'
import { 
  Image,
  View, 
  Text, 
  StyleSheet, 
  ListView,
  TouchableHighlight,
} from 'react-native'

import ChatRoomSearchHeader from './ChatRoomSearchHeader'

const chatRoomList = [
  {roomName:'A', roomMember:'3', roomCreatedTime:'9:30pm'},
  {roomName:'B', roomMember:'2', roomCreatedTime:'10:30pm'},
  {roomName:'C', roomMember:'2', roomCreatedTime:'11:30pm'},
];

class ChatRoomList extends Component {

constructor(props) {
   super(props);
   this.state = {
       dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2
       })
   };
}

componentDidMount() {
  this.setState({
      dataSource: this.state.dataSource.cloneWithRows(chatRoomList)
  });
}

renderChatRoom(room) {
   return (
        <TouchableHighlight onPress={console.log('click the row')}>
            <View>
                <View style={styles.rowContainer}>
                    <Text style={styles.rowText}>{room.roomName}</Text>
                    <Text style={styles.rowMemberText}>{room.roomMember}</Text>
                    <Text style={styles.rowTimeText}>{room.roomCreatedTime}</Text>
                </View>
                <View style={styles.separator} />
            </View>
        </TouchableHighlight>
   );
}


  render(){
    return(
        <View>
          <ChatRoomSearchHeader />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderChatRoom.bind(this)}
            style={styles.listView}
          />
        </View>
      );
    }
}




const styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop:30,
    paddingBottom:10,
  },
  rowText: {
    width: 80,           
    color:'#fff',
    textAlign:'center',
  },
  rowMemberText: {
    flex: 1,
    textAlign: 'center',
  },
  rowTimeText: {
    width: 80, 
    color: '#656565',
    textAlign:'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd',
  },
});

export default ChatRoomList