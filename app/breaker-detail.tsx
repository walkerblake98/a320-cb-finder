
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, Platform } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import { colors } from "@/styles/commonStyles";
import { panels } from "@/data/panelCoordinates";

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function BreakerDetailScreen() {
  const params = useLocalSearchParams();
  const { name, panel, row, col, description } = params;

  const panelInfo = panels.find((p) => p.name === panel);

  const parseCoordinates = (rowStr: string, colStr: string) => {
    const rows = rowStr.includes('-') ? rowStr.split('-') : [rowStr];
    const cols = colStr.includes('-') ? colStr.split('-') : colStr.includes('&') ? colStr.split('&').map(c => c.trim()) : [colStr];
    
    return { rows, cols };
  };

  const { rows, cols } = parseCoordinates(row as string, col as string);

  return (
    <React.Fragment>
      <Stack.Screen
        options={{
          title: "Circuit Breaker Details",
          headerBackTitle: "Back",
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

        {panelInfo && (
          <View style={styles.diagramCard}>
            <Text style={styles.diagramTitle}>Panel Diagram</Text>
            <Text style={styles.diagramSubtitle}>
              Highlighted location on {panelInfo.name}
            </Text>
            
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: panelInfo.imageUrl }}
                style={styles.panelImage}
                resizeMode="contain"
              />
              <View style={styles.highlightOverlay}>
                <View style={styles.highlightBox}>
                  <Text style={styles.highlightText}>
                    {rows.join('-')} / {cols.join(',')}
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.legendCard}>
              <Text style={styles.legendTitle}>How to locate:</Text>
              <Text style={styles.legendText}>
                - Find row(s): <Text style={styles.legendBold}>{rows.join(', ')}</Text>
              </Text>
              <Text style={styles.legendText}>
                - Find column(s): <Text style={styles.legendBold}>{cols.join(', ')}</Text>
              </Text>
              <Text style={styles.legendText}>
                - The circuit breaker is at the intersection
              </Text>
            </View>
          </View>
        )}

        {!panelInfo && (
          <View style={styles.noDiagramCard}>
            <Text style={styles.noDiagramText}>
              Panel diagram not available for {panel}
            </Text>
          </View>
        )}
      </ScrollView>
    </React.Fragment>
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
  diagramCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.secondary + '20',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    elevation: 3,
  },
  diagramTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  diagramSubtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.4,
    backgroundColor: colors.background,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  panelImage: {
    width: '100%',
    height: '100%',
  },
  highlightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightBox: {
    backgroundColor: colors.highlight + '80',
    borderWidth: 3,
    borderColor: colors.accent,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    boxShadow: '0px 0px 12px rgba(255, 193, 7, 0.6)',
    elevation: 5,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
  },
  legendCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  legendTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 12,
  },
  legendText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 6,
    lineHeight: 20,
  },
  legendBold: {
    fontWeight: '700',
    color: colors.primary,
  },
  noDiagramCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary + '20',
  },
  noDiagramText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
