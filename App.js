import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Task from './components/tasks';
import Collapsible from 'react-native-collapsible';
import Todo from './components/todo';

export default function App() {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Todo title={"University Tasks"}/>
        <Todo title={"Travel Tasks"}/>
        <Todo title={"Shopping Tasks"}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  scrollView: {
    marginHorizontal: 5,
  },
  tasksWrapper :{
      paddingTop: 50,
      paddingHorizontal:20,
    },
    sectionTitle :{
      fontSize: 24,
      fontWeight: 'bold',
    },
    item :{
      marginTop: 30,
    },
    writeTaskWrapper: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    input: {
      paddingVertical: 15,
      paddingHorizontal: 15,
      backgroundColor: '#FFF',
      borderRadius: 60,
      borderColor: '#C0C0C0',
      borderWidth: 1,
      width: 250,
    },
    addWrapper: {
      width: 60,
      height: 60,
      backgroundColor: '#FFF',
      borderRadius: 60,
      justifyItems: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addText: {
    },
});
