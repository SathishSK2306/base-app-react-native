import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.avatarCircle}>
          <Ionicons name="person" size={42} color={colors.primary} />
        </View>

        <Text style={styles.name}>Demo User</Text>
        <Text style={styles.info}>demo@example.com</Text>
        <Text style={styles.info}>+91 9876543210</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 28,
    alignItems: 'center',
    width: '100%',
    maxWidth: 360,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18,
  },
  name: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 10,
  },
  info: {
    color: colors.muted,
    fontSize: 16,
    marginBottom: 8,
  },
});
