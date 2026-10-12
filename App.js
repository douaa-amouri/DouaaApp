import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, FlatList, Text } from 'react-native';
import products from './src/data/products';
import ProductScreen from './src/screens/ProductScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
        )}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});