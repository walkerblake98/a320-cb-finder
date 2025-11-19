
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  useColorScheme,
  Platform,
} from 'react-native';
import { IconSymbol } from '@/components/IconSymbol';
import { getColors } from '@/styles/commonStyles';
import { mockRepositories, Repository } from '@/data/githubData';
import { useRouter } from 'expo-router';

export default function RepositoriesScreen() {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'updated' | 'stars' | 'name'>('updated');

  const filteredRepos = mockRepositories
    .filter(repo =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      repo.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'updated') {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      } else if (sortBy === 'stars') {
        return b.stars - a.stars;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const handleRepoPress = (repoId: string) => {
    console.log('Navigate to repo:', repoId);
    router.push(`/repository/${repoId}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Repositories</Text>
        <View style={[styles.searchContainer, { backgroundColor: colors.background, borderColor: colors.border }]}>
          <IconSymbol
            ios_icon_name="magnifyingglass"
            android_material_icon_name="search"
            size={18}
            color={colors.textSecondary}
          />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search repositories..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <View style={styles.sortContainer}>
          <TouchableOpacity
            style={[
              styles.sortButton,
              sortBy === 'updated' && { backgroundColor: colors.primary + '20' },
            ]}
            onPress={() => setSortBy('updated')}
          >
            <Text style={[styles.sortText, { color: sortBy === 'updated' ? colors.primary : colors.textSecondary }]}>
              Updated
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortButton,
              sortBy === 'stars' && { backgroundColor: colors.primary + '20' },
            ]}
            onPress={() => setSortBy('stars')}
          >
            <Text style={[styles.sortText, { color: sortBy === 'stars' ? colors.primary : colors.textSecondary }]}>
              Stars
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortButton,
              sortBy === 'name' && { backgroundColor: colors.primary + '20' },
            ]}
            onPress={() => setSortBy('name')}
          >
            <Text style={[styles.sortText, { color: sortBy === 'name' ? colors.primary : colors.textSecondary }]}>
              Name
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {filteredRepos.map((repo, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={[styles.repoCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                onPress={() => handleRepoPress(repo.id)}
                activeOpacity={0.7}
              >
                <View style={styles.repoHeader}>
                  <IconSymbol
                    ios_icon_name="folder.fill"
                    android_material_icon_name="folder"
                    size={20}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.repoName, { color: colors.primary }]} numberOfLines={1}>
                    {repo.name}
                  </Text>
                  {repo.isPrivate && (
                    <View style={[styles.privateBadge, { backgroundColor: colors.border }]}>
                      <Text style={[styles.privateBadgeText, { color: colors.textSecondary }]}>Private</Text>
                    </View>
                  )}
                </View>
                {repo.description && (
                  <Text style={[styles.repoDescription, { color: colors.textSecondary }]} numberOfLines={2}>
                    {repo.description}
                  </Text>
                )}
                <View style={styles.repoMeta}>
                  {repo.language && (
                    <View style={styles.metaItem}>
                      <View style={[styles.languageDot, { backgroundColor: repo.languageColor }]} />
                      <Text style={[styles.metaText, { color: colors.textSecondary }]}>{repo.language}</Text>
                    </View>
                  )}
                  <View style={styles.metaItem}>
                    <IconSymbol
                      ios_icon_name="star.fill"
                      android_material_icon_name="star"
                      size={14}
                      color={colors.textSecondary}
                    />
                    <Text style={[styles.metaText, { color: colors.textSecondary }]}>
                      {formatNumber(repo.stars)}
                    </Text>
                  </View>
                  <View style={styles.metaItem}>
                    <IconSymbol
                      ios_icon_name="arrow.triangle.branch"
                      android_material_icon_name="call-split"
                      size={14}
                      color={colors.textSecondary}
                    />
                    <Text style={[styles.metaText, { color: colors.textSecondary }]}>
                      {formatNumber(repo.forks)}
                    </Text>
                  </View>
                  <Text style={[styles.metaText, { color: colors.textSecondary }]}>
                    Updated {formatDate(repo.updatedAt)}
                  </Text>
                </View>
              </TouchableOpacity>
            </React.Fragment>
          ))}
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
    marginBottom: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 15,
  },
  sortContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  sortButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  sortText: {
    fontSize: 13,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  repoCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  repoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  repoName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  privateBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  privateBadgeText: {
    fontSize: 11,
    fontWeight: '500',
  },
  repoDescription: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  repoMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flexWrap: 'wrap',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  metaText: {
    fontSize: 12,
  },
});
