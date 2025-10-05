import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    src: any;
    label: string;
}

export default function ImageViewer({src, label}: Props){
    return (
        <View style={styles.container}>
            <Image source={src} style={styles.image}/>
            <Text>{label}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 'auto',
        backgroundColor: '#41cf48ff',
        width: 340,
        height: 480,
        borderColor: '#111',
        borderWidth: 5,
        alignItems: 'center',
        borderRadius: 16

    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
        marginBottom: 3,
    },
    text:{
        fontSize: 21,

    }
});