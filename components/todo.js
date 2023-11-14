import React, {useState} from 'react';
import { Platform, StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Keyboard } from 'react-native';
import Task from './tasks';
import Collapsible from 'react-native-collapsible';

const Todo = ({title}) => {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task])
        setTask(null);
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    const [collasped, setCollasped] = useState(false);
    const toggleExpand = () => {
        setCollasped(!collasped)
    }

    return(
        <View style={styles.tasksWrapper}>
            <TouchableOpacity onPress={toggleExpand}>
                <Text style={styles.sectionTitle}>{title}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={collasped}>
                <View style={styles.item}>
                 {/* where the tasks go */}
                {
                taskItems.map((item, index)=>{
                    return (
                    <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                    <Task key={index} text={item}/>
                    </TouchableOpacity>
                    )
                })
                }
                {/* <Task/> */}
                </View>
                <KeyboardAvoidingView
                behaviour={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}>
                    <TextInput style={styles.input} placeholder={'add task'} value={task} onChangeText={text=>setTask(text)}/>
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={styles.addWrapper}>
                            <Text style={styles.addText}>+</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </Collapsible>
        </View>
    )
}

const styles = StyleSheet.create({
    tasksWrapper :{
        paddingTop: 50,
        paddingHorizontal:20,
      },
      sectionTitle :{
        fontSize: 24,
        fontWeight: 'bold',
      },
      item :{
        marginTop: 20,
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
        flex: 1,
        justifyItems: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
      },
      addText: {
        fontSize: 40,
      },
});



export default Todo;