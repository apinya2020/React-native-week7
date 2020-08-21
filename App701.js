import React from 'react' //class react-js
import {View,Text,Image,StyleSheet} from 'react-native' //class react-naive

export default function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>I Love My Cat</Text>
      <Text style={styles.text}>Career of React Native</Text>
      <Image 
        style={styles.image}
        source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2019_Democracy_index.svg/1200px-2019_Democracy_index.svg.png'}}
      />
      <Image 
        style={styles.image}
        source={require('./assets/favicon.png')}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    alignItems:'center',
    alignContent:'center',
    flex:1,
  },
  text:{
    fontSize:10,
    fontWeight:'bold',
    color:'red',
    backgroundColor:'orange',
    padding:20,
    margin:20,
  },
  image:{
    width:400,
    height:250,
  }
})