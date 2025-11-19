import { StyleSheet, View, Text, FlatList } from "react-native";
import TaskItem from "../../components/TaskItem";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { router } from "expo-router";
import useTaskContext from "../../components/context/useTaskContext";

export default function Tasks() {

    const { tasks, deleteTask, toggleTaskCompleted } = useTaskContext()

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>

                <View style={styles.inner}>
                    <FlatList
                        ListEmptyComponent={
                            <Text style={styles.emptyMsg}>
                                Ainda Não há tarefas na sua lista, que tal adicionar?
                            </Text>
                        }
                        data={tasks}
                        renderItem={({ item }) => <TaskItem
                            completed={item.completed}
                            text={item.description}
                            onPressDelete={() => deleteTask(item.id)}
                            onToggleComplete={() => toggleTaskCompleted(item.id)}
                            onPressEdit={() => router.navigate(`/edit-task/${item.id}`)}
                        />}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                        ListHeaderComponent={<Text style={styles.text}>LISTA DE TAREFAS:</Text>}
                        ListFooterComponent={<View style={{ marginTop: 16 }}>
                            <FokusButton
                                title="Adicionar nova tarefa"
                                icon={<IconPlus outline />}
                                outline
                                onPress={() => router.navigate('/add-task')}
                            />
                        </View>}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        gap: 40,
        alignItems: 'center'
    },
    wrapper: {
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: "center",
        color: '#FFF',
        fontSize: 26,
        marginBottom: 16,
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontFamily: 'monospace'
    },
    emptyMsg: {
        color: '#98A0A8',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 24
    },
    inner: {
        gap: 8
    }
})