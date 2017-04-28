import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput 
} from 'react-native'


const ChatRoomSearchHeader = (props) => (
  <View style={styles.searchContainer}>
    <TextInput
      style={styles.searchInput}
      placeholder="Input chat room name to search ..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

const styles = StyleSheet.create({
  searchContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput:{
    height: 40,
    width: 300,
    color:'#4d96b5',
    borderWidth: 2,
    borderColor: '#4d96b5',
    borderRadius: 6,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
  },
});


export default ChatRoomSearchHeader;