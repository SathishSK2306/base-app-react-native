import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { router } from 'expo-router';
import AppButton from '../components/AppButton';
import { colors } from '../constants/colors';
import { useCart } from '../context/CartContext';

export default function CheckoutScreen() {
  const { subtotal, clearCart } = useCart();
  const [customerName, setCustomerName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');

  const total = useMemo(() => subtotal, [subtotal]);

  const handlePlaceOrder = () => {
    const fields = [customerName, mobile, address, city, pincode];

    if (fields.some((field) => field.trim() === '')) {
      setError('Please fill in all checkout details.');
      return;
    }

    const newOrderId = `MS${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(newOrderId);
    setOrderPlaced(true);
    clearCart();
    setError('');
  };

  if (orderPlaced) {
    return (
      <View style={styles.successContainer}>
        <Text style={styles.successEmoji}>✓</Text>
        <Text style={styles.successTitle}>Order placed successfully!</Text>
        <Text style={styles.successText}>Order ID: {orderId}</Text>
        <AppButton title="Continue Shopping" onPress={() => router.push('/')} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Checkout</Text>

      <View style={styles.formCard}>
        <TextInput
          style={styles.input}
          placeholder="Customer name"
          value={customerName}
          onChangeText={setCustomerName}
        />

        <TextInput
          style={styles.input}
          placeholder="Mobile number"
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
        />

        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          multiline
        />

        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />

          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Pincode"
            value={pincode}
            onChangeText={setPincode}
            keyboardType="numeric"
          />
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      <View style={styles.summaryBox}>
        <Text style={styles.summaryLabel}>Order total</Text>
        <Text style={styles.summaryValue}>₹{total.toLocaleString('en-IN')}</Text>
      </View>

      <AppButton title="Place Order" onPress={handlePlaceOrder} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 18,
  },
  formCard: {
    backgroundColor: colors.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 18,
  },
  input: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 15,
    color: colors.text,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  halfInput: {
    flex: 1,
  },
  errorText: {
    color: colors.danger,
    fontSize: 13,
    fontWeight: '600',
  },
  summaryBox: {
    backgroundColor: colors.card,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    marginBottom: 16,
  },
  summaryLabel: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  summaryValue: {
    color: colors.text,
    fontSize: 26,
    fontWeight: '800',
  },
  successContainer: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  successEmoji: {
    fontSize: 54,
    color: colors.success,
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 6,
    textAlign: 'center',
  },
  successText: {
    fontSize: 16,
    color: colors.muted,
    marginBottom: 20,
  },
});
