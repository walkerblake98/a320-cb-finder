
import React, { useState, useMemo } from "react";
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { colors } from "@/styles/commonStyles";
import { circuitBreakers, CircuitBreaker } from "@/data/circuitBreakerData";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredBreakers = useMemo(() => {
    if (!searchQuery.trim()) {
      return circuitBreakers;
    }
    
    const query = searchQuery.toLowerCase();
    return circuitBreakers.filter(
      (cb) =>
        cb.name.toLowerCase().includes(query) ||
        cb.description.toLowerCase().includes(query) ||
        cb.panel.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleBreakerPress = (breaker: CircuitBreaker) => {
    console.log("Selected breaker:", breaker.name);
    router.push({
      pathname: "/breaker-detail",
      params: {
        name: breaker.name,
        panel: breaker.panel,
        row: breaker.row,
        col: breaker.col,
        description: breaker.description,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>A320 Circuit Breaker Locator</Text>
        <Text style={styles.subtitle}>Search by system name</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search circuit breakers..."
          placeholderTextColor={colors.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <ScrollView 
        style={styles.resultsList}
        contentContainerStyle={styles.resultsContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredBreakers.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No circuit breakers found</Text>
            <Text style={styles.emptySubtext}>Try a different search term</Text>
          </View>
        ) : (
          filteredBreakers.map((breaker, index) => (
            <TouchableOpacity
              key={index}
              style={styles.breakerCard}
              onPress={() => handleBreakerPress(breaker)}
              activeOpacity={0.7}
            >
              <View style={styles.breakerHeader}>
                <Text style={styles.breakerName}>{breaker.name}</Text>
                <View style={styles.panelBadge}>
                  <Text style={styles.panelText}>{breaker.panel}</Text>
                </View>
              </View>
              <Text style={styles.breakerDescription}>{breaker.description}</Text>
              <View style={styles.coordinatesRow}>
                <Text style={styles.coordinatesLabel}>Location:</Text>
                <Text style={styles.coordinatesValue}>
                  Row {breaker.row}, Col {breaker.col}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 12,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary + '30',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 4,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: colors.card,
  },
  searchInput: {
    backgroundColor: colors.background,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.secondary + '30',
  },
  resultsList: {
    flex: 1,
  },
  resultsContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  breakerCard: {
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.secondary + '20',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
    elevation: 2,
  },
  breakerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  breakerName: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.text,
    flex: 1,
    marginRight: 12,
  },
  panelBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  panelText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  breakerDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
    lineHeight: 20,
  },
  coordinatesRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coordinatesLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
    marginRight: 6,
  },
  coordinatesValue: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: '500',
  },
});
