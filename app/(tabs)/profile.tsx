import ImageViewer from '@/components/image-viewr';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileSceen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer src={require("../../assets/images/joao-gabriel.jpg")} label='João Gabriel' /> 
        <ImageViewer src={require("../../assets/images/Dominância-dark.png")} label='Seu livro' /> 
        <ImageViewer src={require("../../assets/images/skin-joao.png")} label='Sua skin no Minecraft' /> 
      </View>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    imageContainer: {
      flex: 1,
      flexDirection: 'row',
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
        borderWidth: 2,
        marginHorizontal: 'auto',
    },
});
