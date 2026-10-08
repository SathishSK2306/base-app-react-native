import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../constants/colors';
import type { CartItem as CartEntry } from '../context/CartContext';

type CartItemProps = {
  item: CartEntry;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
};

export default function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="cover" />

      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.price}>₹{(item.price * item.quantity).toLocaleString('en-IN')}</Text>

        <View style={styles.qtyRow}>
          <Pressable onPress={onDecrease} style={styles.qtyButton}>
            <Text style={styles.qtyText}>-</Text>
          </Pressable>

          <Text style={styles.quantity}>{item.quantity}</Text>

          <Pressable onPress={onIncrease} style={styles.qtyButton}>
            <Text style={styles.qtyText}>+</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.rightSide}>
        <Pressable onPress={onRemove}>
          <Text style={styles.removeText}>Remove</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#E5E7EB',
  },
  details: {
    flex: 1,
  },
  name: {
    color: colors.text,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  price: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 10,
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  qtyButton: {
    width: 30,
    height: 30,
    borderRadius: 8,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  qtyText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
  },
  quantity: {
    minWidth: 30,
    textAlign: 'center',
    color: colors.text,
    fontWeight: '700',
    fontSize: 15,
    marginHorizontal: 12,
  },
  rightSide: {
    marginLeft: 8,
    alignItems: 'flex-end',
  },
  removeText: {
    color: colors.danger,
    fontWeight: '700',
    fontSize: 13,
  },
});
