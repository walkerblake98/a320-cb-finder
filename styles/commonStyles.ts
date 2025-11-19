
import { StyleSheet, useColorScheme } from 'react-native';

// Function to get colors based on color scheme (GitHub-inspired)
export const getColors = (colorScheme: 'light' | 'dark' | null | undefined) => {
  const isDark = colorScheme === 'dark';
  
  return {
    background: isDark ? '#0d1117' : '#f6f8fa',
    text: isDark ? '#c9d1d9' : '#24292f',
    textSecondary: isDark ? '#8b949e' : '#57606a',
    primary: isDark ? '#58a6ff' : '#0969da',
    secondary: isDark ? '#8b949e' : '#6e7781',
    accent: isDark ? '#f78166' : '#cf222e',
    card: isDark ? '#161b22' : '#ffffff',
    highlight: isDark ? '#388bfd26' : '#ddf4ff',
    border: isDark ? '#30363d' : '#d0d7de',
  };
};

// Default colors for light mode (for backwards compatibility)
export const colors = {
  background: '#f0f0f0',
  text: '#333333',
  textSecondary: '#777777',
  primary: '#007BFF',
  secondary: '#6C757D',
  accent: '#FFC107',
  card: '#FFFFFF',
  highlight: '#FFFF00',
  border: '#E5E5E5',
};

export const buttonStyles = StyleSheet.create({
  instructionsButton: {
    backgroundColor: colors.primary,
    alignSelf: 'center',
    width: '100%',
  },
  backButton: {
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    width: '100%',
  },
});

export const commonStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 800,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.text,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 8,
    lineHeight: 24,
    textAlign: 'center',
  },
  section: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: colors.card,
    borderColor: colors.secondary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    width: '100%',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
    elevation: 2,
  },
  icon: {
    width: 60,
    height: 60,
    tintColor: colors.primary,
  },
});
