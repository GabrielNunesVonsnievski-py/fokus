import { Text, View, TextInput, Pressable, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { IconSave } from "../../components/Icons";
import useTaskContext from "../../components/context/useTaskContext";
import { useState } from "react";
import { router } from "expo-router";

export default function AddTask() {

    const [description, setDescription] = useState()

    const { addTask } = useTaskContext()

    const submitTask = () => {
        if (!description) {
            return
        }
        addTask(description)
        setDescription('')
        router.navigate('/tasks')
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Pressable onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.text}>
                        Adicionar uma Tarefa
                    </Text>
                    <TextInput
                        placeholder="Digite Aqui!"
                        style={styles.input}
                        numberOfLines={10}
                        multiline={true}
                        value={description}
                        onChangeText={setDescription}
                    />
                    <View style={styles.actions}>
                        <Pressable style={styles.button} onPress={submitTask}>
                            <IconSave />
                            <Text style={styles.salvar}>
                                SALVAR
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        gap: 16,
        alignItems: 'center'
    },
    text: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        fontFamily: 'monospace'
    },
    inner: {
        backgroundColor: '#14448080',
        width: '90%',
        borderRadius: 12,
        padding: 16,
        gap: 32
    },

    input: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 8,
        height: 100
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        backgroundColor: '#144480',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    salvar:{
        color: '#FFF',
    }
})