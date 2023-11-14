import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Platform, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Keyboard, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import TaskScreen from './navigation/screens/taskScreen';
import ProgressScreen from './navigation/screens/progressScreen';

//ScreenNames
const taskName = 'Task';
const progressName = 'Progress';
const Tab = createBottomTabNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
      initialRouteName={taskName}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === taskName) {
            iconName = focused ? 'checkbox' : 'checkbox-outline'
          } else if (rn === progressName) {
            iconName = focused ? 'list' : 'list-outline'
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        },
      })}
      tabBarOptions={{
        activeTintColor : '#55BCF6',
        labelStyle:{paddingBottom:10, fontSize:10},
        style:{padding:10, height:70},
      }}
      >
        

        <Tab.Screen name={taskName} component={TaskScreen}/>
        <Tab.Screen name={progressName} component={ProgressScreen}/>
      

      </Tab.Navigator>
    </NavigationContainer>
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
