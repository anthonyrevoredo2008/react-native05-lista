import React from 'react';
import { View, Text, FlatList, Pressable } from 'react-native';

import { styles } from './Styles';

<Text style={styles.title}>
            Lista de Frutas
        </Text>

const DATA = [
    { id: "1", title: "Abacate", description: "Fruta rica em vitaminas e gorduras boas",  },
    { id: "2", title: "Tangerina", description: "Fruta cítrica rica em vitamina C." },
    { id: "3", title: "Uva", description: "Fruta pequena usada para vinhos e sucos." },
    { id: "4", title: "Maracujá", description: "Fruta conhecida pelo efeito calmante." },
    { id: "5", title: "Melão", description: "Fruta doce e refrescante." },
];

export function Home() {

    const renderItem = ({ item }: { item: { title: string, description: string } }) => (
        <Pressable 
            onPress={() => alert(`${item.title}\n\n${item.description}`)} 
            style={styles.item}
        >
            <Text style={styles.text}>{item.title}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>



    <Text style={styles.title}>
    Lista de Frutas
    </Text>

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
