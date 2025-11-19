
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
import { mockRepositories } from '@/data/githubData';
import { useRouter } from 'expo-router';

type SearchType = 'repositories' | 'code' | 'issues' | 'users';

export default function SearchScreen() {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<SearchType>('repositories');

  const searchTypes: { type: SearchType; label: string; icon: { ios: string; android: string } }[] = [
    { type: 'repositories', label: 'Repositories', icon: { ios: 'folder.fill', android: 'folder' } },
    { type: 'code', label: 'Code', icon: { ios: 'doc.text.fill', android: 'code' } },
    { type: 'issues', label: 'Issues', icon: { ios: 'exclamationmark.circle.fill', android: 'error' } },
    { type: 'users', label: 'Users', icon: { ios: 'person.fill', android: 'person' } },
  ];

  const filteredRepos = searchQuery
    ? mockRepositories.filter(repo =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : [];

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  const handleRepoPress = (repoId: string) => {
    console.log('Navigate to repo:', repoId);
    router.push(`/repository/${repoId}`);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Search</Text>
        <View style={[styles.searchContainer, { backgroundColor: colors.background, borderColor: colors.border }]}>
          <IconSymbol
            ios_icon_name="magnifyingglass"
            android_material_icon_name="search"
            size={20}
            color={colors.textSecondary}
          />
          <TextInput
            style={[styles.searchInput, { color: colors.text }]}
            placeholder="Search GitHub..."
            placeholderTextColor={colors.textSecondary}
            value={searchQuery}
            onChangeText={setSearchQuery}
            autoFocus={false}
          />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.typeScroll}>
          {searchTypes.map((type, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={[
                  styles.typeButton,
                  { borderColor: colors.border },
                  searchType === type.type && { backgroundColor: colors.primary, borderColor: colors.primary },
                ]}
                onPress={() => setSearchType(type.type)}
              >
                <IconSymbol
                  ios_icon_name={type.icon.ios}
                  android_material_icon_name={type.icon.android}
                  size={16}
                  color={searchType === type.type ? '#FFFFFF' : colors.textSecondary}
                />
                <Text
                  style={[
                    styles.typeText,
                    { color: searchType === type.type ? '#FFFFFF' : colors.textSecondary },
                  ]}
                >
                  {type.label}
                </Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {!searchQuery ? (
            <View style={styles.emptyState}>
              <IconSymbol
                ios_icon_name="magnifyingglass"
                android_material_icon_name="search"
                size={64}
                color={colors.textSecondary}
              />
              <Text style={[styles.emptyTitle, { color: colors.text }]}>Search GitHub</Text>
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                Find repositories, code, issues, and users
              </Text>
            </View>
          ) : filteredRepos.length === 0 ? (
            <View style={styles.emptyState}>
              <IconSymbol
                ios_icon_name="exclamationmark.triangle.fill"
                android_material_icon_name="warning"
                size={64}
                color={colors.textSecondary}
              />
              <Text style={[styles.emptyTitle, { color: colors.text }]}>No results found</Text>
              <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                Try different keywords or filters
              </Text>
            </View>
          ) : (
            <React.Fragment>
              <Text style={[styles.resultsCount, { color: colors.textSecondary }]}>
                {filteredRepos.length} {filteredRepos.length === 1 ? 'result' : 'results'}
              </Text>
              {filteredRepos.map((repo, index) => (
                <React.Fragment key={index}>
                  <TouchableOpacity
                    style={[styles.resultCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                    onPress={() => handleRepoPress(repo.id)}
                    activeOpacity={0.7}
                  >
                    <View style={styles.resultHeader}>
                      <IconSymbol
                        ios_icon_name="folder.fill"
                        android_material_icon_name="folder"
                        size={20}
                        color={colors.textSecondary}
                      />
                      <Text style={[styles.resultName, { color: colors.primary }]} numberOfLines={1}>
                        {repo.fullName}
                      </Text>
                    </View>
                    {repo.description && (
                      <Text style={[styles.resultDescription, { color: colors.textSecondary }]} numberOfLines={2}>
                        {repo.description}
                      </Text>
                    )}
                    <View style={styles.resultMeta}>
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
                    </View>
                    {repo.topics.length > 0 && (
                      <View style={styles.topicsContainer}>
                        {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                          <React.Fragment key={topicIndex}>
                            <View style={[styles.topicBadge, { backgroundColor: colors.primary + '20' }]}>
                              <Text style={[styles.topicText, { color: colors.primary }]}>{topic}</Text>
                            </View>
                          </React.Fragment>
                        ))}
                      </View>
                    )}
                  </TouchableOpacity>
                </React.Fragment>
              ))}
            </React.Fragment>
          )}
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
    paddingVertical: 10,
    borderWidth: 1,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  typeScroll: {
    marginHorizontal: -20,
    paddingHorizontal: 20,
  },
  typeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
    gap: 6,
  },
  typeText: {
    fontSize: 13,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 15,
    textAlign: 'center',
  },
  resultsCount: {
    fontSize: 14,
    marginBottom: 12,
  },
  resultCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  resultName: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  resultDescription: {
    fontSize: 14,
    marginBottom: 12,
    lineHeight: 20,
  },
  resultMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
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
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  topicBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  topicText: {
    fontSize: 11,
    fontWeight: '500',
  },
});
