import { Href, Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  link: Href;
};

export default function Button({ label, link }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Link href={link} style={styles.button}>
          <Text style={styles.buttonLink}>{label}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 120,
    height: 40,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    backgroundColor: '#111',
    borderRadius: 10,
  },
  button: {
    
    width: '100%',
    height: '100%',
    textAlign: 'center',
    flexDirection: 'row',
  },
  buttonLink: {
    color: '#41cf48ff',
    fontSize: 18,
  },
});