import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from "@rneui/themed"; 

const InfoScreen = ({ route, navigation }) => {
    const item = route.params;

    return (
            <View style={styles.container}>
                <View style={styles.viewImage}>
                    <ImageBackground
                    source={{ uri: item.img }}
                    resizeMode="cover"
                    style={styles.imgBackground}>
                    <View style={styles.iconsView}>
                    <Icon name= "close" color={"#FFFF"} type="material-community" size={40} onPress={() =>
                        navigation.navigate('MainScreen')}/>
                    <Icon name= "export-variant" color={"#FFFF"} type="material-community" size={40}/>
                    <Icon name= "heart-outline" color={"#FFFF"} type="material-community" size={40}/>
                    </View>

                    <Text style={styles.section}>{item.recent ? 'Recent' : 'Trending'}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                    </ImageBackground>
                </View>
            

            <View style={styles.viewServing}>
                <Text>Ingredients</Text>
                <Text>for {item.recipe.servings} servings</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center'
    },
    section:{
        fontSize: 20,
        color: 'white',
    },
    title:{
        fontSize: 25,
        color: 'white',
    },
    viewImage:{
        width: "100%",
        height: "45%",
        backgroundColor: 'gray'
    },
    imgBackground: {
        width: "100%",
        height: "100%",
        
    },
    viewServing: {
        height: 70,
        width: '100%',
    },
    iconsView:{
        flexDirection: 'row',
        paddingTop: 30,
        opacity: 1,
    }
});
export default InfoScreen;