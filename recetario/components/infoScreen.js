import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';

const InfoScreen = ({ route, navigation }) => {
    const item = route.params;

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: item.img }}
                resizeMode="cover"
                style={styles.imgBackground}>

                <Text>{item.recent ? 'Recent' : 'Trending'}</Text>
                <Text>{item.title}</Text>
                <TouchableOpacity
                    onPress={() =>
                        navigation.navigate('MainScreen')}
                >
                    <Text>Go to Home</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center'
    },
    imgBackground: {
        width: "100%",
        height: "50%"
    }
});
export default InfoScreen;