
import { Redirect } from 'expo-router';

export default function Index() {
  // Redirect to the home/search screen (circuit breaker search)
  return <Redirect href="/(tabs)/(home)" />;
}
