import { View, Text, StyleSheet } from 'react-native';

import TodoButton from './todo-button';

const Todo = ({ todo, toggleComplete, deleteTodo }) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <TodoButton
                name="Done"
                complete={todo.complete}
                onPress={() => toggleComplete(todo.todoIndex)} />
            <TodoButton
                name="Delete"
                onPress={() => deleteTodo(todo.todoIndex)} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    todoContainer: {
        marginHorizontal: 20,
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1, 
        borderColor: '#EDEDED',
        paddingLeft: 14,
        paddingVertical: 7,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000',
        shadowOffset: {width: 2, height:2},
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    todoText: {
        fontSize: 17
    }
});

export default Todo;