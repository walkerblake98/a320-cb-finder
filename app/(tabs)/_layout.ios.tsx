
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, useRouter, usePathname } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SegmentedControl, { SegmentOption } from '@/components/SegmentedControl';
import { colors } from '@/styles/commonStyles';

export default function TabLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const [selectedTab, setSelectedTab] = useState('info');
  const [hasInitialized, setHasInitialized] = useState(false);

  const tabs: SegmentOption[] = [
    { label: 'Info', value: 'info' },
    { label: 'Search', value: 'search' },
  ];

  useEffect(() => {
    console.log('Current pathname:', pathname);
    if (pathname.includes('/(home)')) {
      setSelectedTab('search');
    } else if (pathname.includes('/profile')) {
      setSelectedTab('info');
    }
  }, [pathname]);

  useEffect(() => {
    // Ensure we start on the Info page only once
    if (!hasInitialized) {
      console.log('Initial navigation to Info page');
      router.replace('/(tabs)/profile');
      setHasInitialized(true);
    }
  }, [hasInitialized, router]);

  const handleTabChange = (value: string) => {
    console.log('Tab changed to:', value);
    setSelectedTab(value);
    if (value === 'info') {
      router.push('/(tabs)/profile');
    } else if (value === 'search') {
      router.push('/(tabs)/(home)/');
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, { paddingTop: insets.top }]}>
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
        <Stack.Screen key="profile" name="profile" />
        <Stack.Screen key="home" name="(home)" />
        <Stack.Screen key="index" name="index" />
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
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary + '20',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
    elevation: 2,
  },
});
