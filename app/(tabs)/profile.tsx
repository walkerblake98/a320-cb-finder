
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { colors } from "@/styles/commonStyles";

export default function ProfileScreen() {
  const panelLocations = [
    { id: 'panel-1', title: '49 VU:', description: 'Cockpit Overhead Panel' },
    { id: 'panel-2', title: '121 VU - 125 VU:', description: "Behind F/O's Seat" },
    { id: 'panel-3', title: '105 E&E - 106 E&E:', description: 'Electronics & Equipment Bay' },
    { id: 'panel-4', title: 'Fwd Cabin:', description: 'Forward Cabin Ceiling' },
    { id: 'panel-5', title: 'Aft Cabin:', description: 'Aft Cabin Ceiling' },
  ];

  const howToSteps = [
    { id: 'step-1', number: '1.', text: 'Enter the system name in the search bar' },
    { id: 'step-2', number: '2.', text: 'Tap on a circuit breaker from the results' },
    { id: 'step-3', number: '3.', text: 'View the panel location and coordinates' },
  ];

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
          <React.Fragment>
            {panelLocations.map((location, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.bullet}>•</Text>
                <Text style={styles.listText}>
                  <Text style={styles.bold}>{location.title}</Text> {location.description}
                </Text>
              </View>
            ))}
          </React.Fragment>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>How to Use</Text>
          <React.Fragment>
            {howToSteps.map((step, index) => (
              <View key={index} style={styles.listItem}>
                <Text style={styles.number}>{step.number}</Text>
                <Text style={styles.listText}>{step.text}</Text>
              </View>
            ))}
          </React.Fragment>
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
    paddingTop: 20,
    paddingBottom: 40,
  },
  header: {
    paddingVertical: 20,
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
