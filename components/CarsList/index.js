import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'

import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                data={cars}
                renderItem={(items) => <CarItem items={items} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        </View>
    )
}

export default CarsList
