import React, { useState } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Item from "./item";

const DATA = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        title: "Pepperoni Pizza",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        title: "Chocolate Chip",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="

    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Pancake Cups",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="

    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Pancake Cups",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="

    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "Pancake Cups",
        img: "https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?k=20&m=938742222&s=612x612&w=0&h=X5AlEERlt4h86X7U7vlGz3bDaDDGQl4C3MuU99u2ZwQ="

    },
];


const TrendingList = ({ title, width, height }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const color = item.id === selectedId ? '#F8F8F8' : 'white';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                textColor={{ color }}
                width={{ width }}
                height={{ height }}
            />
        );
    };

    return (
        <>
            <Text style={styles.sectionName}>{title}</Text>
            <ScrollView style={styles.container}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                    horizontal={true}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight || 0,
        borderWidth: 3,
        borderColor: ''
    },
    sectionName: {
        color: '#B32A5A',
        paddingLeft: 15,
        fontSize: 16,
        fontWeight: '600',
    },

});

export default TrendingList;