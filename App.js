import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header';

export default function App() {
  const [state, setstate] = useState("i am good")
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList/>
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

