import { Image, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { FokusButton } from "../components/FokusButton";

export default function Index() {
  return (<View style={styles.container}>
      <Image style={styles.image} source={require('../assets/images/Fokus_Hit.png')}/>
      <View style={styles.inner}>
        <Text style={styles.title}>
          Seu HIT, {'\n'} do seu jeito. {'\n'}
        <Text  style={styles.bold}>
          Onde cada passo {'\n'} te leva mais longe.
        </Text>
        </Text>
      {/* <Image source={require('../assets/images/pagina_inicial.png')}/> */}
      <FokusButton
        title="Quero Iniciar!"
        onPress={() => router.replace('/hit')}
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
    </View>)
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  inner:{
    gap: 2
  },
  title:{
    color: '#FFF',
    textAlign: 'center',
    fontSize: 26
  },
  bold:{
    fontWeight: 'bold'
  },
  footer:{
    width: '80%'
  },
  footerText:{
    textAlign: 'center',
    color: '#98A0A8',
    fontSize: 12.5
  }
})