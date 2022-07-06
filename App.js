import React, { use} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Button
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:20,
    paddingVertical: 20,
    backgroundColor:'red',
    justifyContent:"center",
    alignItems:"center"
  }
})


const Box = ({children}) => (
  <View style={styles.container}>
    <Text>
      {children}
    </Text>
  </View>
)


const App = () => {

  const onPress = async () => {
    try{
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      console.log( data )
    }
    catch(err){
      console.log(err)
    }


  }

  return (
    <SafeAreaView>
      <Button title='PressMe' onPress={onPress}/>
      <Text> mmmm </Text>
    </SafeAreaView>
  );
};

export default App;
