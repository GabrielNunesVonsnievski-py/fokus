import { useLocalSearchParams } from "expo-router";
import { Keyboard } from "react-native";
import { Platform, Pressable } from "react-native";
import { Text, View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import { IconSave } from "../../components/Icons";

export default function EditTask () {

    const { id } = useLocalSearchParams()

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Pressable onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.text}>
                        Editar tarefa numero: {id}

                    </Text>
                    <TextInput
                        placeholder="Digite aqui!"
                        style={styles.input}
                        numberOfLines={10}
                        multiline={true}
                        // value={description}
                        // onChangeText={setDescription}
                    />
                    <View style={styles.actions}>
                        <Pressable style={styles.button}>
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