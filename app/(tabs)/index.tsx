
import { Redirect } from 'expo-router';

export default function TabsIndex() {
  // Redirect to the profile (info) page by default
  return <Redirect href="/(tabs)/profile" />;
}
