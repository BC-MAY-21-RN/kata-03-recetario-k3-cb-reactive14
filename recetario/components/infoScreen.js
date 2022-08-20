import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, StatusBar, Platform, ScrollView, FlatList } from 'react-native';
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
                        <View style={{ width: '60%', justifyContent: 'flex-end' }}>
                            <Icon name="close" color={"#FFFF"} type="material-community" size={40} onPress={() =>
                                navigation.navigate('MainScreen')} style={{ backgroundColor: 'red', width: '' }} />
                        </View>
                        <View style={{ flexDirection: 'row', width: '40%', justifyContent: 'flex-end' }}>
                            <Icon name="export-variant" color={"#FFFF"} type="material-community" size={40} />
                            <Icon name="heart-outline" color={"#FFFF"} type="material-community" size={40} />
                        </View>


                    </View>

                    <Text style={styles.section}>{item.recent ? 'Recent' : 'Trending'}</Text>
                    <Text style={styles.title}>{item.title}</Text>
                </ImageBackground>
            </View>


            <View style={styles.viewServing}>
                <Text style={styles.textServing}>Ingredients</Text>
                <Text style={styles.textServing}>for {item.recipe.servings} servings</Text>
            </View>

            {/* 
            <ScrollView style={styles.container}>
                <FlatList
                    data={item.recipe.ingredients}
                />
            </ScrollView> */}



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    section: {
        fontSize: 20,
        color: 'white',
    },
    title: {
        fontSize: 25,
        color: 'white',
    },
    viewImage: {
        width: "100%",
        height: "45%",
        // backgroundColor: 'rgba(255, 0, 0, 0.3)',

    },
    imgBackground: {
        width: "100%",
        height: "100%",
        opacity: 0.8,
        backgroundColor: 'black'
    },
    viewServing: {
        width: '100%',
        height: 70,
        backgroundColor: '#4B4B4B',
        justifyContent: 'center'
    },
    textServing: {
        paddingLeft: 15,
        fontSize: 18,
        color: 'white'
    },
    iconsView: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: "black",

    }
});
export default InfoScreen;