import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Todo from '../../components/todo';

export default function TaskScreen({navigation}) {
    return(
    <View style={styles.container}>
        <Text
        onPress={() => navigation.navigate('task')}>
        </Text>
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
});      