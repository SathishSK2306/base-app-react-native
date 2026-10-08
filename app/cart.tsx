import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';
import AppButton from '../components/AppButton';
import CartItem from '../components/CartItem';
import { colors } from '../constants/colors';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const { cart, subtotal, totalItems, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Your cart is empty</Text>
        <Text style={styles.emptyText}>Add a few items to get started.</Text>
        <AppButton title="Continue Shopping" onPress={() => router.push('/')} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onIncrease={() => updateQuantity(item.id, 1)}
            onDecrease={() => updateQuantity(item.id, -1)}
            onRemove={() => removeFromCart(item.id)}
          />
        )}
      />

      <View style={styles.summaryBox}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>₹{subtotal.toLocaleString('en-IN')}</Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Total Items</Text>
          <Text style={styles.summaryValue}>{totalItems}</Text>
        </View>

        <AppButton title="Checkout" onPress={() => router.push('/checkout')} style={styles.checkoutButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 18,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 18,
  },
  summaryBox: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  summaryLabel: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: '600',
  },
  summaryValue: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '800',
  },
  checkoutButton: {
    marginTop: 8,
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 8,
  },
  emptyText: {
    color: colors.muted,
    fontSize: 16,
    marginBottom: 20,
  },
});
