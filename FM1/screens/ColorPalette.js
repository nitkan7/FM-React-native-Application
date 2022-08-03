import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import React from 'react';

import ColorBox from '../Components/ColorBox.js';

const ColorPalette = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>{route.params.paletteName}</Text>
      </View>
      <FlatList
        data={route.params.Colors}
        keyExtractor={item => item.colorName}
        renderItem={({item}) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </SafeAreaView>
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: 'white',
  },
});
