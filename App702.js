import React from 'react'
import {View,Text,StyleSheet,Image,Button} from 'react-native'

export default class App extends React.Component{
  /*state*/ 
    state={
      headline:'Where to my app',
    }
  
    updateState=()=>{
      this.setState({
        headline:'Welcome back to my App!',
      })
    }

  /*parent*/
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>{this.state.headline}</Text>
        <Image
          style={styles.image}
          source={{uri:'https://sgp1.digitaloceanspaces.com/adaybulletin/2019/06/feature_lyricsoflife_iwontgiveup.jpg'}}
        />
        <Button 
          onPress={this.updateState} 
          title="Spider girls"
          color="orange"
        />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize:15,
    fontWeight:'bold',
    color:'red',
  },
  image:{
    width:450,
    height:200,
  }
})