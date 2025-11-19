
import React from 'react';
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs
      tabBarActiveTintColor="#007AFF"
    >
      <NativeTabs.Trigger key="profile" name="profile">
        <Icon sf="info.circle.fill" />
        <Label>Info</Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger key="home" name="(home)">
        <Icon sf="magnifyingglass" />
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
