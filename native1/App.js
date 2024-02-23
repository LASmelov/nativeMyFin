// App.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InsideBlock from './components/InsideBlock/inside';
import HeaderBlock from './components/Header/header';

const App = () => {
  return (
    <View style={styles.container1}>
      <InsideBlock style={styles.insideBlock}/>
      <HeaderBlock style={styles.headerBlock}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    width:'1920px',
    backgroundColor: "#F4F5F6",
    flexDirection: 'row',

  },

})

export default App;
