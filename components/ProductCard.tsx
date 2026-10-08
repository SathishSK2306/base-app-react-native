import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { Product } from '../data/products';
import { colors } from '../constants/colors';
import AppButton from './AppButton';

type ProductCardProps = {
  product: Product;
  onPress: () => void;
  onAddToCart: () => void;
};

export default function ProductCard({ product, onPress, onAddToCart }: ProductCardProps) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>
          {product.name}
        </Text>
        <Text style={styles.price}>₹{product.price.toLocaleString('en-IN')}</Text>
        <Text style={styles.category}>{product.category}</Text>
      </View>

      <AppButton
        title="Add to Cart"
        onPress={onAddToCart}
        variant="primary"
        style={styles.button}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: colors.card,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#E5E7EB',
  },
  content: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 10,
  },
  name: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  price: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  category: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '600',
  },
  button: {
    marginHorizontal: 12,
    marginBottom: 12,
  },
});
