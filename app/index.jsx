import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function index() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={{ pathname: '/hit' }}>Iniciar hit!</Link>
    </View>
  )
}