import { StyleSheet, Text, View } from 'react-native';


export default function SobreScreen () {
  return (
    <View style={styles.container}>
      <Text>João Gabriel</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
  },
});