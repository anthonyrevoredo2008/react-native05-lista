import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

import { styles } from './Styles';

const DATA = [
    { id: "1", title: "Laranja" },
    { id: "2", title: "Banana" },
    { id: "3", title: "Morango" },
    { id: "4", title: "Abacaxi" },
    { id: "5", title: "Melancia" },
];

export function Home() {

    const renderItem = ({ item }: { item: { title: string } }) => (
        <Pressable 
            onPress={() => alert(item.title)} 
            style={styles.item}
        >
            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                numColumns={1}
                style={styles.lista}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}
