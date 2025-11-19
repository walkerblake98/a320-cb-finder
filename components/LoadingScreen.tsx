
import React from 'react';
import { View, Image, StyleSheet, useColorScheme } from 'react-native';
import { getColors } from '@/styles/commonStyles';

export default function LoadingScreen() {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Image
        source={require('@/assets/images/28ccc65a-099f-4fbf-ab4d-670eee023b76.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
