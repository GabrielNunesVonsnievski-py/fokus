import { useRef, useState } from "react";
import { Image, StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { FokusButton } from "../components/FokusButton";
import { ActionButton } from "../components/ActionButton";
import { Timer } from "../components/Timer";
import { IconPause } from "../components/Icons";
import { IconPlay } from "../components/Icons";
import { SafeAreaView } from "react-native-safe-area-context";

const modalidades = [
  {
    id: 'Corrida',
    initialValue: 5 * 60,
    image: require('../assets/images/corrida.png'),
    display: 'Corrida'
  },
  {
    id: 'Caminhada',
    initialValue: 25 * 60,
    image: require('../assets/images/caminhada.png'),
    display: 'Caminhada'
  },
  {
    id: 'Descanso',
    initialValue: 10 * 60,
    image: require('../assets/images/descanso.png'),
    display: 'Descanso'
  },
]

export default function Hit() {

  const [timerType, setTimerType] = useState(modalidades[0])
  const [seconds, setSeconds] = useState(modalidades[0].initialValue)
  const [timerRunning, setTimerRunning] = useState(false)

  const timerRef = useRef(null)

  const clear = () => {
    if(timerRef.current != null){
      clearInterval(timerRef.current)
      timerRef.current = null
      setTimerRunning(false)
    }
  }

  const toggleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }

  const toggleTimer = () => {
    if(timerRef.current){
      clear()
      return
    }

    setTimerRunning(true)

    const id = setInterval(() => {
      setSeconds(oldState => {
        if(oldState === 0){
          clear()
          return timerType.initialValue
        }
        return oldState - 1
      })
      console.log('timer rolando')
    },1000)
    timerRef.current = id
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inner}>
        <Image source={timerType.image}/>
        <View style={styles.actions}>
          <View style={styles.context}>
            {modalidades.map(p =>(
              <ActionButton
                key={p.id}
                active={timerType.id === p.id}
                onPress={() => toggleTimerType(p)}
                display={p.display}
              />
            ))}
          </View>
          <Timer totalSeconds={seconds}/>
            <FokusButton
              title={timerRunning ? 'Pausar' : 'Começar'}
              icon={timerRunning ? <IconPause /> : <IconPlay />}
              onPress={toggleTimer}
            />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Projeto desenvolvido sem fins comerciais.
          </Text>
          <Text style={styles.footerText}>
            Desenvolvido por Gabriel Nunes Vonsnievki.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#021123',
  },
  inner:{
    alignItems: "center",
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