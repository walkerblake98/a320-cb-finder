
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, useColorScheme } from "react-native";
import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import { colors, getColors } from "@/styles/commonStyles";
import { panels } from "@/data/panelCoordinates";
import { IconSymbol } from "@/components/IconSymbol";

export default function BreakerDetailScreen() {
  const params = useLocalSearchParams();
  const { name, panel, row, col, description } = params;
  const router = useRouter();
  const colorScheme = useColorScheme();
  const themeColors = getColors(colorScheme);

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

  const handleBackPress = () => {
    console.log('Back button pressed');
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace('/(tabs)/(home)');
    }
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: themeColors.background }]}>
      <Stack.Screen
        options={{
          title: "Circuit Breaker Details",
          headerBackTitle: "Back",
          headerShown: true,
          headerStyle: {
            backgroundColor: themeColors.card,
          },
          headerTintColor: themeColors.primary,
          headerTitleStyle: {
            color: themeColors.text,
            fontSize: 18,
            fontWeight: '600',
          },
          headerLeft: () => (
            <TouchableOpacity 
              onPress={handleBackPress}
              style={styles.backButton}
              activeOpacity={0.6}
            >
              <View style={styles.backButtonContent}>
                <IconSymbol 
                  ios_icon_name="chevron.left" 
                  android_material_icon_name="arrow_back" 
                  size={22} 
                  color={themeColors.primary}
                />
                <Text style={[styles.backButtonText, { color: themeColors.primary }]}>Back</Text>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={[styles.infoCard, { backgroundColor: themeColors.card, borderColor: themeColors.secondary + '20' }]}>
          <Text style={[styles.breakerName, { color: themeColors.text }]}>{name}</Text>
          <Text style={[styles.breakerDescription, { color: themeColors.textSecondary }]}>{description}</Text>
          
          <View style={[styles.divider, { backgroundColor: themeColors.secondary + '20' }]} />
          
          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: themeColors.text }]}>Panel:</Text>
            <View style={[styles.panelBadge, { backgroundColor: themeColors.primary }]}>
              <Text style={styles.panelText}>{panel}</Text>
            </View>
          </View>

          {panelInfo && (
            <Text style={[styles.panelDescription, { color: themeColors.textSecondary }]}>{panelInfo.description}</Text>
          )}

          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: themeColors.text }]}>Row:</Text>
            <Text style={[styles.infoValue, { color: themeColors.primary }]}>{row}</Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={[styles.infoLabel, { color: themeColors.text }]}>Column:</Text>
            <Text style={[styles.infoValue, { color: themeColors.primary }]}>{col}</Text>
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
  backButton: {
    paddingLeft: 8,
    paddingRight: 12,
    paddingVertical: 8,
    marginLeft: -4,
  },
  backButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  backButtonText: {
    fontSize: 17,
    fontWeight: '400',
    color: colors.primary,
    letterSpacing: -0.2,
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
