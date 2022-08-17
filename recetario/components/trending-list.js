import React, { useState } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Item from "./item";
import * as data from '../resources/data.json';



const TrendingList = ({ title, width, height, data }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const color = item.id === selectedId ? '#F8F8F8' : 'white';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                }}
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
                    data={data}
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

    },
    sectionName: {
        color: '#B32A5A',
        paddingLeft: 15,
        fontSize: 18,
        letterSpacing: 2,
        fontWeight: '600',
    },

});

export default TrendingList;