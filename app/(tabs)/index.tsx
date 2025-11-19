
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
  useColorScheme,
  Platform,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { getColors } from '@/styles/commonStyles';
import { mockActivities, Activity } from '@/data/githubData';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  const router = useRouter();

  const getActivityIcon = (type: Activity['type']) => {
    switch (type) {
      case 'push':
        return { ios: 'arrow.up.circle.fill', android: 'upload' };
      case 'star':
        return { ios: 'star.fill', android: 'star' };
      case 'fork':
        return { ios: 'arrow.triangle.branch', android: 'call-split' };
      case 'issue':
        return { ios: 'exclamationmark.circle.fill', android: 'error' };
      case 'pull_request':
        return { ios: 'arrow.triangle.pull', android: 'merge-type' };
      case 'create':
        return { ios: 'plus.circle.fill', android: 'add-circle' };
      case 'watch':
        return { ios: 'eye.fill', android: 'visibility' };
      default:
        return { ios: 'circle.fill', android: 'circle' };
    }
  };

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'push':
        return '#28a745';
      case 'star':
        return '#ffd33d';
      case 'fork':
        return '#0366d6';
      case 'issue':
        return '#d73a49';
      case 'pull_request':
        return '#6f42c1';
      case 'create':
        return '#28a745';
      case 'watch':
        return '#0366d6';
      default:
        return colors.textSecondary;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins}m ago`;
    } else if (diffHours < 24) {
      return `${diffHours}h ago`;
    } else if (diffDays < 7) {
      return `${diffDays}d ago`;
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }
  };

  const handleRepoPress = (repoId: string) => {
    console.log('Navigate to repo:', repoId);
    router.push(`/repository/${repoId}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Home</Text>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Activity</Text>
          {mockActivities.map((activity, index) => {
            const icon = getActivityIcon(activity.type);
            const iconColor = getActivityColor(activity.type);
            
            return (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.activityCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                  onPress={() => handleRepoPress(activity.repo.id)}
                  activeOpacity={0.7}
                >
                  <View style={styles.activityHeader}>
                    <Image
                      source={{ uri: activity.actor.avatar }}
                      style={styles.avatar}
                    />
                    <View style={styles.activityInfo}>
                      <View style={styles.activityTitleRow}>
                        <IconSymbol
                          ios_icon_name={icon.ios}
                          android_material_icon_name={icon.android}
                          size={16}
                          color={iconColor}
                        />
                        <Text style={[styles.activityTitle, { color: colors.text }]} numberOfLines={2}>
                          {activity.message}
                        </Text>
                      </View>
                      <Text style={[styles.repoName, { color: colors.primary }]}>
                        {activity.repo.fullName}
                      </Text>
                      {activity.details && (
                        <Text style={[styles.activityDetails, { color: colors.textSecondary }]} numberOfLines={2}>
                          {activity.details}
                        </Text>
                      )}
                      <Text style={[styles.timestamp, { color: colors.textSecondary }]}>
                        {formatTimestamp(activity.timestamp)}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            );
          })}
        </View>
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: Platform.OS === 'android' ? 48 : 60,
    paddingBottom: 16,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  activityCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  activityHeader: {
    flexDirection: 'row',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  activityTitle: {
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
  },
  repoName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  activityDetails: {
    fontSize: 13,
    marginBottom: 6,
  },
  timestamp: {
    fontSize: 12,
  },
});
