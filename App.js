import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './components/CarItem';

export default function App() {
  const [state, setstate] = useState("i am good")
  return (
    <View style={styles.container}>
      <CarItem
        name={'Model X'}
        tagline={'Starting from $60,400'}
        image={require('./assets/images/ModelX.jpeg')}
      />
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

