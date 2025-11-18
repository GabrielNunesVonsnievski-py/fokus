import { Pressable, Text, View } from "react-native" ;
import { IconCheck, IconPencil, IconTrash } from "../Icons";
import { StyleSheet } from "react-native";

const TaskItem = ({ completed, text , onToggleComplete, onPressEdit, onPressDelete }) => {

    const cardStyles = [styles.card]

    if(completed){
        cardStyles.push(styles.cardCompleted)
    }

    return (
        <View style={[cardStyles]}>
            <Pressable onPress={onToggleComplete}>
                <IconCheck checked={completed}/>
            </Pressable>
            <Text style={styles.text}>
                {text}
            </Text>
            <Pressable onPress={onPressEdit}>
                <IconPencil/>
            </Pressable>
            <Pressable onPress={onPressDelete}>
                <IconTrash/>
            </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#00000048',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        paddingVertical: 18,
        borderRadius: 8,
        gap: 8
    },
    cardCompleted: {
        backgroundColor: '#0f7241ff'
    },
    text: {
        flex: 1,
        color: '#ffffffff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default TaskItem