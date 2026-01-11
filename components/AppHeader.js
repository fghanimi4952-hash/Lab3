// AppHeader.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Mobile Academy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#495E57',
    padding: 20,
    paddingTop: 50,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#F4CE14',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F4CE14',
  },
});
