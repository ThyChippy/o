import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { CheckBox, Icon } from '@rneui/themed';

const Task = ({text, completeTask}) => {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);

    useEffect(() => {
        if (check3) {
            completeTask();
        }
    }, [check3, completeTask]);

    return(
        <View style={styles.item}>
            <View style={styles.itemleft} >
                <CheckBox styles={{marginRight:1}} checked={check1} onPress={() => setCheck1(!check1)} checkedColor='#55BCF6'/>
                <CheckBox styles={{marginRight:1}} checked={check2} onPress={() => setCheck2(!check2)} checkedColor='#55BCF6'/>
                <CheckBox styles={{marginRight:1}} checked={check3} onPress={() => setCheck3(!check3)} checkedColor='#55BCF6'/>
                <Text style={styles.itemText}>{text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    itemleft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
    },
});

export default Task;