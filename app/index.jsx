import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";

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
            <Pressable key={p.id} style={timerType.id === p.id ? styles.contextButtonActive : null} onPress={() => setTimerType(p)}>
              <Text style={styles.contextButtonText}>
                {p.display}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.timer}>
          { new Date(timerType.initialValue * 1000).toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'} )}
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
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
  timer:{
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button:{
    backgroundColor: '#B872FF',
    borderRadius: 32,
    padding: 8
  },
  buttonText:{
    textAlign: 'center',
    color: '#021132',
    fontSize: 18
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
  },
  contextButtonActive:{
    backgroundColor: '#144480',
    borderRadius: 8
  },
  contextButtonText:{
    fontSize: 12.5,
    color: '#FFF',
    padding: 8
  }
})