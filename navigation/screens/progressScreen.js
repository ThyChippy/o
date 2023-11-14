import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

export default function ProgressScreen({navigation}) {
    return(
    <View style={styles.container}>
        <Text
        onPress={() => navigation.navigate('progress')}>
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#E8EAED',
    }
});