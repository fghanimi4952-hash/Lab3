// AppFooter.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppFooter() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        © 2024 Mobile Academy - Lab 3
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#495E57',
    padding: 15,
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#F4CE14',
  },
  footerText: {
    fontSize: 16,
    color: '#EDEFEE',
  },
});
