
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { colors } from "@/styles/commonStyles";
import { panels } from "@/data/panelCoordinates";

export default function BreakerDetailScreen() {
  const params = useLocalSearchParams();
  const { name, panel, row, col, description } = params;

  console.log('Breaker detail params:', params);

  const panelInfo = panels.find((p) => p.name === panel);

  const parseCoordinates = (rowStr: string, colStr: string) => {
    try {
      const rows = rowStr.includes('-') ? rowStr.split('-') : [rowStr];
      const cols = colStr.includes('-') ? colStr.split('-') : colStr.includes('&') ? colStr.split('&').map(c => c.trim()) : [colStr];
      
      return { rows, cols };
    } catch (error) {
      console.error('Error parsing coordinates:', error);
      return { rows: [rowStr], cols: [colStr] };
    }
  };

  const { rows, cols } = parseCoordinates(row as string, col as string);

  return (
    <View style={styles.wrapper}>
      <Stack.Screen
        options={{
          title: "Circuit Breaker Details",
          headerBackTitle: "Back",
          headerShown: true,
        }}
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.infoCard}>
          <Text style={styles.breakerName}>{name}</Text>
          <Text style={styles.breakerDescription}>{description}</Text>
          
          <View style={styles.divider} />
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Panel:</Text>
            <View style={styles.panelBadge}>
              <Text style={styles.panelText}>{panel}</Text>
            </View>
          </View>

          {panelInfo && (
            <Text style={styles.panelDescription}>{panelInfo.description}</Text>
          )}

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Row:</Text>
            <Text style={styles.infoValue}>{row}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Column:</Text>
            <Text style={styles.infoValue}>{col}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  infoCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.secondary + '20',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  breakerName: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  breakerDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: colors.secondary + '20',
    marginVertical: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    marginRight: 12,
    width: 80,
  },
  infoValue: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: '600',
  },
  panelBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
  },
  panelText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  panelDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 12,
    fontStyle: 'italic',
  },
});
