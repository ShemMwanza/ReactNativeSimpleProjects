import { View, Text, FlatList } from 'react-native'
import React, { useCallback, useState } from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile';



export default function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
            });
        }

        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        );
    }
    const [numColumns, setNumColumns] = useState(2);
    const keyExtractor = useCallback(item => item.id, []);
    return (
        <FlatList
            data={CATEGORIES}
            key={`${numColumns}`}
            keyExtractor={keyExtractor}
            renderItem={renderCategoryItem}
            numColumns={numColumns}
        />

    )
}