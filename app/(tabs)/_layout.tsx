
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, useRouter, usePathname, useSegments } from 'expo-router';
import SegmentedControl, { SegmentOption } from '@/components/SegmentedControl';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = useSegments();
  const [selectedTab, setSelectedTab] = useState('info');

  const tabs: SegmentOption[] = [
    { label: 'Info', value: 'info' },
    { label: 'Search', value: 'search' },
  ];

  // Update selected tab based on current route
  useEffect(() => {
    console.log('Current pathname:', pathname);
    console.log('Current segments:', segments);
    
    if (pathname.includes('/(home)') || pathname.includes('/home')) {
      setSelectedTab('search');
    } else if (pathname.includes('/profile')) {
      setSelectedTab('info');
    }
  }, [pathname, segments]);

  const handleTabChange = (value: string) => {
    console.log('Tab changed to:', value);
    
    // Prevent navigation if already on the selected tab
    if (value === selectedTab) {
      console.log('Already on this tab, skipping navigation');
      return;
    }
    
    setSelectedTab(value);
    
    if (value === 'info') {
      // Use replace instead of push to prevent stacking multiple screens
      router.replace('/(tabs)/profile');
    } else if (value === 'search') {
      // Use replace instead of push to prevent stacking multiple screens
      router.replace('/(tabs)/(home)/');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SegmentedControl
          options={tabs}
          selectedValue={selectedTab}
          onValueChange={handleTabChange}
        />
      </View>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
        initialRouteName="profile"
      >
        <Stack.Screen name="profile" />
        <Stack.Screen name="(home)" />
        <Stack.Screen name="index" />
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.card,
    paddingTop: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary + '20',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
});
