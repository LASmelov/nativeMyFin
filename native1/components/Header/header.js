import React from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';

const HeaderBlock = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
      <Image 
        source={uri ='./components/Header/img/Icon.png'} 
        style={styles.icon}
      />
      </TouchableOpacity>

      <TextInput 
        style={styles.input} 
        placeholder="Введите текст"
      />

      <TouchableOpacity style={styles.button}>
        <Image 
          source={uri ='./components/Header/img/bell-01.png'}
          style={styles.buttonIcon}
        />
      </TouchableOpacity>

      <Text style={styles.name}>Имя</Text>
      <Image 
        source={uri ='./components/Header/img/Ellipse 212.png'} 
        style={styles.avatar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    ju: 'space-between',
    padding: 10,


  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {

    marginLeft: 10,
  },
  button: {
    marginLeft: 10,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  name: {
    marginLeft: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
  },
});

export default HeaderBlock;
