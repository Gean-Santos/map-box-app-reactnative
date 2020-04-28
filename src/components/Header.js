import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, Dimensions, TouchableHighlight } from 'react-native';

export default function Header() {
  const initialState = 'Meu Mapa';
  return(
    <View style={styles.container}>
      <Text style={styles.label}> {initialState} </Text>
      </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '7%',
    paddingHorizontal: '1%',
    backgroundColor: '#7159C1',
    borderTopWidth: 4,
    borderLeftWidth: 4,
    borderRightWidth: 4,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    width: Dimensions.get('window').width / 3,
    fontSize: 18,
    borderWidth: 3,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'blue',
    width: Dimensions.get('window').width / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelButton: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 16,
  }
});