import { FlatList, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { colors } from '../constants/colors';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function HomeScreen() {
  const [searchText, setSearchText] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MiniShop</Text>
        <Text style={styles.subtitle}>Fresh finds for your day</Text>
      </View>

      <SearchBar value={searchText} onChangeText={setSearchText} placeholder="Search products" />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.gridRow}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No products found.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() => router.push({ pathname: '/product/[id]', params: { id: item.id } })}
            onAddToCart={() => addToCart(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 10,
  },
  title: {
    color: colors.text,
    fontSize: 32,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },
  gridRow: {
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 80,
  },
  emptyState: {
    flex: 1,
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyText: {
    color: colors.muted,
    fontSize: 16,
    fontWeight: '600',
  },
});
