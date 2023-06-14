import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [fontsLoaded, error] = useFonts({
        'montserrat-regular': require('./assets/fonts/Montserrat-Regular.ttf'),
        'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
        'montserrat-semibold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
        'opensans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'spacemono-regular': require('./assets/fonts/SpaceMono-Regular.ttf'),
    });

    return (
        <View style={styles.container}>
            <Text style={styles.styledText}>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    styledText: {
        fontFamily: 'montserrat-regular',
    },
});
