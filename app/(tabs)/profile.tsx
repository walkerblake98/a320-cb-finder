
import React from "react";
import { View, Text, StyleSheet, ScrollView, Platform } from "react-native";
import { colors } from "@/styles/commonStyles";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>A320 CB Locator</Text>
          <Text style={styles.subtitle}>Circuit Breaker Reference Guide</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>About This App</Text>
          <Text style={styles.cardText}>
            This app helps pilots quickly locate circuit breakers in the Airbus A320 aircraft by system name. 
            Simply search for a circuit breaker and view its exact panel location with coordinates.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Panel Locations</Text>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>
              <Text style={styles.bold}>49 VU:</Text> Cockpit Overhead Panel
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>
              <Text style={styles.bold}>121 VU - 125 VU:</Text> Behind F/O&apos;s Seat
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>
              <Text style={styles.bold}>2000 VU:</Text> Forward Cabin Ceiling
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>
              <Text style={styles.bold}>2001 VU:</Text> Aft Cabin Ceiling
            </Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>How to Use</Text>
          <View style={styles.listItem}>
            <Text style={styles.number}>1.</Text>
            <Text style={styles.listText}>
              Enter the system name in the search bar
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.number}>2.</Text>
            <Text style={styles.listText}>
              Tap on a circuit breaker from the results
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.number}>3.</Text>
            <Text style={styles.listText}>
              View the panel location and coordinates
            </Text>
          </View>
          <View style={styles.listItem}>
            <Text style={styles.number}>4.</Text>
            <Text style={styles.listText}>
              Use the visual diagram to locate the exact position
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 48 : 20,
    paddingBottom: 120,
  },
  header: {
    paddingVertical: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.secondary + '20',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft: 4,
  },
  bullet: {
    fontSize: 15,
    color: colors.primary,
    marginRight: 12,
    fontWeight: '700',
  },
  number: {
    fontSize: 15,
    color: colors.primary,
    marginRight: 12,
    fontWeight: '700',
    width: 20,
  },
  listText: {
    fontSize: 15,
    color: colors.textSecondary,
    lineHeight: 22,
    flex: 1,
  },
  bold: {
    fontWeight: '700',
    color: colors.text,
  },
});
