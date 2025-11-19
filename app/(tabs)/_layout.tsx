
import React from 'react';
import { Stack } from 'expo-router';
import FloatingTabBar, { TabBarItem } from '@/components/FloatingTabBar';

export default function TabLayout() {
  const tabs: TabBarItem[] = [
    {
      name: 'profile',
      route: '/(tabs)/profile',
      icon: 'info',
      label: 'Info',
    },
    {
      name: '(home)',
      route: '/(tabs)/(home)/',
      icon: 'search',
      label: 'Search',
    },
  ];

  return (
    <React.Fragment>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen key="profile" name="profile" />
        <Stack.Screen key="home" name="(home)" />
      </Stack>
      <FloatingTabBar tabs={tabs} />
    </React.Fragment>
  );
}
