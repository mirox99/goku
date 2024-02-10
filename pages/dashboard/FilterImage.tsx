import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Card } from 'react-native-paper';
import React, { useEffect } from 'react';
import { apiFetch } from '../../fetchDataService'

const FilterImage = ({ route }) => {
  const { image } = route.params;
  const fetch = async () => {
    const {
      data,
      error
    } = await apiFetch('https://apigateway.eu-north-1.amazonaws.com/restapis/zg83rohhqb/resources/ivsvzel9sh/methods/GET');
    console.log(error,'error')
  }
  useEffect(() => {
    fetch()
  }, [])
  return (<View style={{ flex: 1 }}>
    <Card style={{ width: '100%', flex: 4, backgroundColor: 'transparent' }}>
      <Card.Cover source={{ uri: image.uri }} style={styles.image}/>
    </Card>
    <ScrollView horizontal={true} style={styles.scrollView}>
      <View style={styles.item}>
        <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/81dCCzCEFRL._AC_UF894,1000_QL80_.jpg' }}
          style={{ width: 90, height: 90, objectFit: 'cover' }} // Specify the dimensions as needed
        />
      </View>
      <View style={styles.item}>
        <Image
          source={{ uri: 'https://surflegacy.net/wp-content/uploads/2023/10/viking.webp' }}
          style={{ width: 90, height: 90 }} // Specify the dimensions as needed
        />
      </View>
      <View style={styles.item}>
        <Image
          source={{ uri: 'https://images-platform.99static.com/WWeTfsyhi69xuCvwOh7Y_RBGZ_k=/2x418:971x1387/500x500/top/smart/99designs-contests-attachments/120/120397/attachment_120397084' }}
          style={{ width: 90, height: 90 }} // Specify the dimensions as needed
        />
      </View>
      <View style={styles.item}>
        <Image
          source={{ uri: 'https://pics.craiyon.com/2023-07-01/6a29a51e6f034074b31af827d6c05b1a.webp' }}
          style={{ width: 90, height: 90 }} // Specify the dimensions as needed
        />
      </View>

    </ScrollView>
  </View>)
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 0
  },
  scrollView: {
    backgroundColor: 'transparent',
    padding: 20,
    flex: 1
  },
  item: {
    margin: 10,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10
  },
});

export default FilterImage