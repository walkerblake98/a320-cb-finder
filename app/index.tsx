
import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the info screen (profile page)
  return <Redirect href="/(tabs)/profile" />;
}
