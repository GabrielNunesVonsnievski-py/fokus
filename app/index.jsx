import { useState } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";

const modalidades = [
  {
    id: 'Corrida',
    initialValue: 5,
    image: require('./corrida.png'),
    display: 'Corrida'
  },
  {
    id: 'Caminhada',
    initialValue: 25,
    image: require('./caminhada.png'),
    display: 'Caminhada'
  },
  {
    id: 'Descanso',
    initialValue: 10,
    image: require('./descanso.png'),
    display: 'Descanso'
  },
]

export default function Index() {

  const [timerType, setTimerType] = useState(modalidades[1])

  return (
    <View style={styles.container}>
      <Image source={timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.context}>
          {modalidades.map(p =>(
            <ActionButton
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => setTimerType(p)}
              display={p.display}
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue}/>
          <FokusButton/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto desenvolvido sem fins comerciais.
        </Text>
        <Text style={styles.footerText}>
          Desenvolvido por Gabriel Nunes Vonsnievki.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  actions:{
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32
  },
  footer:{
    width: '80%'
  },
  footerText:{
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  },
  context:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
})