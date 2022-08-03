import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ColorBox = ({colorName, hexCode}) => {
  const boxColor = hexCode;

  return (
    <View>
      <View style={[styles.container, {backgroundColor: boxColor}]}>
        <Text style={styles.textColor}>
          {colorName}: {hexCode}
        </Text>
      </View>
    </View>
  );
};

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
export default ColorBox;
