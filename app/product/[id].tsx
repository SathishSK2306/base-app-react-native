import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import AppButton from '../../components/AppButton';
import { colors } from '../../constants/colors';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundTitle}>Product not found</Text>
        <Text style={styles.notFoundText}>The item you selected is unavailable.</Text>
        <AppButton title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />

      <View style={styles.content}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>₹{product.price.toLocaleString('en-IN')}</Text>

        <View style={styles.ratingRow}>
          <Text style={styles.rating}>★ {product.rating}</Text>
        </View>

        <Text style={styles.description}>{product.description}</Text>

        <AppButton title="Add to Cart" onPress={() => addToCart(product)} style={styles.button} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
  },
  image: {
    width: '100%',
    height: 320,
    backgroundColor: '#E5E7EB',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  category: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  name: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 30,
    marginBottom: 8,
  },
  price: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
  },
  ratingRow: {
    marginBottom: 18,
  },
  rating: {
    color: colors.text,
    fontWeight: '700',
    fontSize: 16,
  },
  description: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  button: {
    marginTop: 12,
  },
  notFoundContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  notFoundTitle: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 8,
  },
  notFoundText: {
    color: colors.muted,
    fontSize: 16,
    marginBottom: 20,
  },
});
