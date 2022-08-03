import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

const MiniColorDisplay = ({Colors}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ColorPalette', {
          paletteName: paletteName,
          Colors: Colors,
        });
      }}>
      <View>
        <Text>{paletteName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreenItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ColorPalette', {
          paletteName: item.paletteName,
          Colors: item.colors,
        });
      }}>
      <Text>{item.paletteName}</Text>
      <FlatList
        data={item.colors.slice(0, 5)}
        keyExtractor={item => item.hexCode}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: item.hexCode,
              height: 20,
              width: 20,
              margin: 10,
            }}>
            <Text>.</Text>
          </View>
        )}
        horizontal={true}
      />
    </TouchableOpacity>
  );
};
const Home = ({navigation}) => {
  const [pallete, setPalette] = useState([]);

  const FetchThePalette = useCallback(async () => {
    let response = await fetch(
      'https://color-palette-api.kadikraman.vercel.app/palettes',
    );
    if (response.ok) {
      let output = await response.json();
      setPalette(output);
      console.log(output[1]);
    } else {
      console.error(response);
    }
  }, []);

  useEffect(() => {
    FetchThePalette();
  }, []);

  return (
    <View>
      <FlatList
        data={pallete}
        keyExtractor={item => item.Name}
        renderItem={({item, index}) => (
          <HomeScreenItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Home;
