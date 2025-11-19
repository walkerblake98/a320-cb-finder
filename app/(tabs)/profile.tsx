
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
import { currentUser } from '@/data/githubData';

export default function ProfileScreen() {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);

  const stats = [
    { label: 'Repositories', value: currentUser.publicRepos, icon: { ios: 'folder.fill', android: 'folder' } },
    { label: 'Followers', value: currentUser.followers, icon: { ios: 'person.2.fill', android: 'people' } },
    { label: 'Following', value: currentUser.following, icon: { ios: 'person.fill', android: 'person' } },
    { label: 'Gists', value: currentUser.publicGists, icon: { ios: 'doc.text.fill', android: 'description' } },
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Profile</Text>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <View style={[styles.profileCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <Image
              source={{ uri: currentUser.avatar }}
              style={styles.avatar}
            />
            <Text style={[styles.name, { color: colors.text }]}>{currentUser.name}</Text>
            <Text style={[styles.username, { color: colors.textSecondary }]}>@{currentUser.username}</Text>
            {currentUser.bio && (
              <Text style={[styles.bio, { color: colors.text }]}>{currentUser.bio}</Text>
            )}
            <View style={styles.infoContainer}>
              {currentUser.company && (
                <View style={styles.infoRow}>
                  <IconSymbol
                    ios_icon_name="building.2.fill"
                    android_material_icon_name="business"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.infoText, { color: colors.textSecondary }]}>{currentUser.company}</Text>
                </View>
              )}
              {currentUser.location && (
                <View style={styles.infoRow}>
                  <IconSymbol
                    ios_icon_name="location.fill"
                    android_material_icon_name="location-on"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.infoText, { color: colors.textSecondary }]}>{currentUser.location}</Text>
                </View>
              )}
              {currentUser.email && (
                <View style={styles.infoRow}>
                  <IconSymbol
                    ios_icon_name="envelope.fill"
                    android_material_icon_name="email"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.infoText, { color: colors.textSecondary }]}>{currentUser.email}</Text>
                </View>
              )}
              {currentUser.website && (
                <View style={styles.infoRow}>
                  <IconSymbol
                    ios_icon_name="link"
                    android_material_icon_name="link"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.infoText, { color: colors.textSecondary }]}>{currentUser.website}</Text>
                </View>
              )}
            </View>
          </View>

          <View style={styles.statsGrid}>
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                  activeOpacity={0.7}
                >
                  <IconSymbol
                    ios_icon_name={stat.icon.ios}
                    android_material_icon_name={stat.icon.android}
                    size={24}
                    color={colors.primary}
                  />
                  <Text style={[styles.statValue, { color: colors.text }]}>{formatNumber(stat.value)}</Text>
                  <Text style={[styles.statLabel, { color: colors.textSecondary }]}>{stat.label}</Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Achievements</Text>
            <View style={[styles.achievementCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.achievementRow}>
                <View style={[styles.achievementIcon, { backgroundColor: '#FFD700' + '20' }]}>
                  <Text style={styles.achievementEmoji}>🏆</Text>
                </View>
                <View style={styles.achievementInfo}>
                  <Text style={[styles.achievementTitle, { color: colors.text }]}>Arctic Code Vault Contributor</Text>
                  <Text style={[styles.achievementDesc, { color: colors.textSecondary }]}>
                    Contributed code to the 2020 GitHub Archive Program
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.achievementCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.achievementRow}>
                <View style={[styles.achievementIcon, { backgroundColor: '#0366d6' + '20' }]}>
                  <Text style={styles.achievementEmoji}>⭐</Text>
                </View>
                <View style={styles.achievementInfo}>
                  <Text style={[styles.achievementTitle, { color: colors.text }]}>Starstruck</Text>
                  <Text style={[styles.achievementDesc, { color: colors.textSecondary }]}>
                    Created a repository that has 100+ stars
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Settings</Text>
            <TouchableOpacity
              style={[styles.settingItem, { backgroundColor: colors.card, borderColor: colors.border }]}
              activeOpacity={0.7}
            >
              <IconSymbol
                ios_icon_name="gear"
                android_material_icon_name="settings"
                size={20}
                color={colors.textSecondary}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>Account Settings</Text>
              <IconSymbol
                ios_icon_name="chevron.right"
                android_material_icon_name="chevron-right"
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.settingItem, { backgroundColor: colors.card, borderColor: colors.border }]}
              activeOpacity={0.7}
            >
              <IconSymbol
                ios_icon_name="bell.fill"
                android_material_icon_name="notifications"
                size={20}
                color={colors.textSecondary}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>Notifications</Text>
              <IconSymbol
                ios_icon_name="chevron.right"
                android_material_icon_name="chevron-right"
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.settingItem, { backgroundColor: colors.card, borderColor: colors.border }]}
              activeOpacity={0.7}
            >
              <IconSymbol
                ios_icon_name="lock.fill"
                android_material_icon_name="lock"
                size={20}
                color={colors.textSecondary}
              />
              <Text style={[styles.settingText, { color: colors.text }]}>Privacy & Security</Text>
              <IconSymbol
                ios_icon_name="chevron.right"
                android_material_icon_name="chevron-right"
                size={20}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          </View>
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
  profileCard: {
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    marginBottom: 12,
  },
  bio: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
  },
  infoContainer: {
    width: '100%',
    gap: 8,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    minWidth: '47%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 13,
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 12,
  },
  achievementCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  achievementEmoji: {
    fontSize: 24,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 2,
  },
  achievementDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    gap: 12,
  },
  settingText: {
    flex: 1,
    fontSize: 15,
    fontWeight: '500',
  },
});
