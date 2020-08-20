import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native';

export default function App(){
  return(
    <View style ={style.container}>
      <Text style={style.text}>
      Hello Worlds
      </Text>
      <Image style={{width:200,height:200}}
              source={{uri:'https://sites.google.com/site/funnycatmeawww/_/rsrc/1422326075261/home/6997052-funny-cat.jpg?height=675&width=1200'}}
              >
      </Image>
      <Image style={{width:200,height:200}}
              source={{uri:'https://miro.medium.com/max/1200/1*lS9ZqdEGZrRiTcL1JUgt9w.jpeg'}}
              >
      </Image>
      <Image style={{width:200,height:200}}
              source={{uri:'https://gossipstar.com/app/uploads/2019/09/S__64954371.jpg'}}
              >
      </Image>
    </View>
  )
}
const style=StyleSheet.create({
  container:{
    flex:1,
  justifyContent:'center',
  alignItems:'center',
  backgroundColor:'#55077C'
  },
  text:{
    fontSize:20,
    Color:'pink',
    backgroundColor:'blue',
    padding:10,
  }
  })
//export default App;