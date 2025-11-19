
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { IconSymbol } from '@/components/IconSymbol';
import { getColors } from '@/styles/commonStyles';
import { mockRepositories, mockIssues, mockPullRequests } from '@/data/githubData';

type TabType = 'code' | 'issues' | 'pulls' | 'about';

export default function RepositoryDetailScreen() {
  const colorScheme = useColorScheme();
  const colors = getColors(colorScheme);
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [activeTab, setActiveTab] = useState<TabType>('code');

  const repo = mockRepositories.find(r => r.id === id);

  if (!repo) {
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <Text style={[styles.errorText, { color: colors.text }]}>Repository not found</Text>
      </View>
    );
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };

  const tabs: { type: TabType; label: string; icon: { ios: string; android: string } }[] = [
    { type: 'code', label: 'Code', icon: { ios: 'doc.text.fill', android: 'code' } },
    { type: 'issues', label: 'Issues', icon: { ios: 'exclamationmark.circle.fill', android: 'error' } },
    { type: 'pulls', label: 'Pull Requests', icon: { ios: 'arrow.triangle.pull', android: 'merge-type' } },
    { type: 'about', label: 'About', icon: { ios: 'info.circle.fill', android: 'info' } },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'code':
        return (
          <View style={styles.tabContent}>
            <View style={[styles.branchCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <View style={styles.branchRow}>
                <IconSymbol
                  ios_icon_name="arrow.triangle.branch"
                  android_material_icon_name="call-split"
                  size={18}
                  color={colors.textSecondary}
                />
                <Text style={[styles.branchText, { color: colors.text }]}>{repo.defaultBranch}</Text>
              </View>
              <Text style={[styles.branchLabel, { color: colors.textSecondary }]}>Default branch</Text>
            </View>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Files</Text>
            {['README.md', 'package.json', 'src/', 'components/', 'assets/'].map((file, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.fileItem, { backgroundColor: colors.card, borderColor: colors.border }]}
                  activeOpacity={0.7}
                >
                  <IconSymbol
                    ios_icon_name={file.endsWith('/') ? 'folder.fill' : 'doc.text.fill'}
                    android_material_icon_name={file.endsWith('/') ? 'folder' : 'description'}
                    size={20}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.fileName, { color: colors.text }]}>{file}</Text>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
        );
      case 'issues':
        return (
          <View style={styles.tabContent}>
            <View style={styles.issueStats}>
              <View style={styles.issueStat}>
                <IconSymbol
                  ios_icon_name="exclamationmark.circle.fill"
                  android_material_icon_name="error"
                  size={18}
                  color="#28a745"
                />
                <Text style={[styles.issueStatText, { color: colors.text }]}>
                  {mockIssues.filter(i => i.state === 'open').length} Open
                </Text>
              </View>
              <View style={styles.issueStat}>
                <IconSymbol
                  ios_icon_name="checkmark.circle.fill"
                  android_material_icon_name="check-circle"
                  size={18}
                  color={colors.textSecondary}
                />
                <Text style={[styles.issueStatText, { color: colors.textSecondary }]}>
                  {mockIssues.filter(i => i.state === 'closed').length} Closed
                </Text>
              </View>
            </View>
            {mockIssues.map((issue, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.issueCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                  activeOpacity={0.7}
                >
                  <View style={styles.issueHeader}>
                    <IconSymbol
                      ios_icon_name={issue.state === 'open' ? 'exclamationmark.circle.fill' : 'checkmark.circle.fill'}
                      android_material_icon_name={issue.state === 'open' ? 'error' : 'check-circle'}
                      size={20}
                      color={issue.state === 'open' ? '#28a745' : colors.textSecondary}
                    />
                    <Text style={[styles.issueTitle, { color: colors.text }]} numberOfLines={2}>
                      {issue.title}
                    </Text>
                  </View>
                  <Text style={[styles.issueNumber, { color: colors.textSecondary }]}>
                    #{issue.number} opened by {issue.author.username}
                  </Text>
                  {issue.labels.length > 0 && (
                    <View style={styles.labelsContainer}>
                      {issue.labels.map((label, labelIndex) => (
                        <React.Fragment key={labelIndex}>
                          <View style={[styles.label, { backgroundColor: colors.primary + '20' }]}>
                            <Text style={[styles.labelText, { color: colors.primary }]}>{label}</Text>
                          </View>
                        </React.Fragment>
                      ))}
                    </View>
                  )}
                  <View style={styles.issueFooter}>
                    <View style={styles.issueMetaItem}>
                      <IconSymbol
                        ios_icon_name="bubble.left.fill"
                        android_material_icon_name="comment"
                        size={14}
                        color={colors.textSecondary}
                      />
                      <Text style={[styles.issueMetaText, { color: colors.textSecondary }]}>
                        {issue.comments}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
        );
      case 'pulls':
        return (
          <View style={styles.tabContent}>
            <View style={styles.issueStats}>
              <View style={styles.issueStat}>
                <IconSymbol
                  ios_icon_name="arrow.triangle.pull"
                  android_material_icon_name="merge-type"
                  size={18}
                  color="#28a745"
                />
                <Text style={[styles.issueStatText, { color: colors.text }]}>
                  {mockPullRequests.filter(pr => pr.state === 'open').length} Open
                </Text>
              </View>
              <View style={styles.issueStat}>
                <IconSymbol
                  ios_icon_name="checkmark.circle.fill"
                  android_material_icon_name="check-circle"
                  size={18}
                  color="#6f42c1"
                />
                <Text style={[styles.issueStatText, { color: colors.textSecondary }]}>
                  {mockPullRequests.filter(pr => pr.state === 'merged').length} Merged
                </Text>
              </View>
            </View>
            {mockPullRequests.map((pr, index) => (
              <React.Fragment key={index}>
                <TouchableOpacity
                  style={[styles.issueCard, { backgroundColor: colors.card, borderColor: colors.border }]}
                  activeOpacity={0.7}
                >
                  <View style={styles.issueHeader}>
                    <IconSymbol
                      ios_icon_name={pr.state === 'merged' ? 'checkmark.circle.fill' : 'arrow.triangle.pull'}
                      android_material_icon_name={pr.state === 'merged' ? 'check-circle' : 'merge-type'}
                      size={20}
                      color={pr.state === 'merged' ? '#6f42c1' : '#28a745'}
                    />
                    <Text style={[styles.issueTitle, { color: colors.text }]} numberOfLines={2}>
                      {pr.title}
                    </Text>
                  </View>
                  <Text style={[styles.issueNumber, { color: colors.textSecondary }]}>
                    #{pr.number} by {pr.author.username}
                  </Text>
                  <View style={styles.prStats}>
                    <Text style={[styles.prStatText, { color: '#28a745' }]}>+{pr.additions}</Text>
                    <Text style={[styles.prStatText, { color: '#d73a49' }]}>-{pr.deletions}</Text>
                  </View>
                </TouchableOpacity>
              </React.Fragment>
            ))}
          </View>
        );
      case 'about':
        return (
          <View style={styles.tabContent}>
            <View style={[styles.aboutCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Text style={[styles.aboutTitle, { color: colors.text }]}>About</Text>
              <Text style={[styles.aboutDescription, { color: colors.textSecondary }]}>
                {repo.description}
              </Text>
              {repo.topics.length > 0 && (
                <View style={styles.topicsSection}>
                  <Text style={[styles.topicsTitle, { color: colors.text }]}>Topics</Text>
                  <View style={styles.topicsContainer}>
                    {repo.topics.map((topic, topicIndex) => (
                      <React.Fragment key={topicIndex}>
                        <View style={[styles.topicBadge, { backgroundColor: colors.primary + '20' }]}>
                          <Text style={[styles.topicText, { color: colors.primary }]}>{topic}</Text>
                        </View>
                      </React.Fragment>
                    ))}
                  </View>
                </View>
              )}
              <View style={styles.aboutInfo}>
                <View style={styles.aboutRow}>
                  <IconSymbol
                    ios_icon_name="doc.text.fill"
                    android_material_icon_name="description"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
                    License: {repo.license}
                  </Text>
                </View>
                <View style={styles.aboutRow}>
                  <IconSymbol
                    ios_icon_name="calendar"
                    android_material_icon_name="calendar-today"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
                    Created: {new Date(repo.createdAt).toLocaleDateString()}
                  </Text>
                </View>
                <View style={styles.aboutRow}>
                  <IconSymbol
                    ios_icon_name="clock.fill"
                    android_material_icon_name="schedule"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={[styles.aboutText, { color: colors.textSecondary }]}>
                    Updated: {new Date(repo.updatedAt).toLocaleDateString()}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        );
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.header, { backgroundColor: colors.card, borderBottomColor: colors.border }]}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <IconSymbol
              ios_icon_name="chevron.left"
              android_material_icon_name="arrow-back"
              size={24}
              color={colors.text}
            />
          </TouchableOpacity>
          <View style={styles.headerTitleContainer}>
            <Text style={[styles.headerTitle, { color: colors.text }]} numberOfLines={1}>
              {repo.name}
            </Text>
            <Text style={[styles.headerSubtitle, { color: colors.textSecondary }]}>
              {repo.owner.username}
            </Text>
          </View>
        </View>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <IconSymbol
              ios_icon_name="star.fill"
              android_material_icon_name="star"
              size={16}
              color={colors.textSecondary}
            />
            <Text style={[styles.statText, { color: colors.textSecondary }]}>
              {formatNumber(repo.stars)}
            </Text>
          </View>
          <View style={styles.statItem}>
            <IconSymbol
              ios_icon_name="arrow.triangle.branch"
              android_material_icon_name="call-split"
              size={16}
              color={colors.textSecondary}
            />
            <Text style={[styles.statText, { color: colors.textSecondary }]}>
              {formatNumber(repo.forks)}
            </Text>
          </View>
          <View style={styles.statItem}>
            <IconSymbol
              ios_icon_name="eye.fill"
              android_material_icon_name="visibility"
              size={16}
              color={colors.textSecondary}
            />
            <Text style={[styles.statText, { color: colors.textSecondary }]}>
              {formatNumber(repo.watchers)}
            </Text>
          </View>
          {repo.language && (
            <View style={styles.statItem}>
              <View style={[styles.languageDot, { backgroundColor: repo.languageColor }]} />
              <Text style={[styles.statText, { color: colors.textSecondary }]}>{repo.language}</Text>
            </View>
          )}
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsScroll}>
          {tabs.map((tab, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                style={[
                  styles.tab,
                  { borderBottomColor: colors.border },
                  activeTab === tab.type && { borderBottomColor: colors.primary },
                ]}
                onPress={() => setActiveTab(tab.type)}
              >
                <IconSymbol
                  ios_icon_name={tab.icon.ios}
                  android_material_icon_name={tab.icon.android}
                  size={18}
                  color={activeTab === tab.type ? colors.primary : colors.textSecondary}
                />
                <Text
                  style={[
                    styles.tabText,
                    { color: activeTab === tab.type ? colors.primary : colors.textSecondary },
                  ]}
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {renderContent()}
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
    paddingBottom: 0,
    borderBottomWidth: 1,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  backButton: {
    marginRight: 12,
  },
  headerTitleContainer: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 14,
  },
  statsRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 16,
    marginBottom: 12,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 13,
  },
  languageDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  tabsScroll: {
    paddingHorizontal: 16,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginRight: 8,
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  tabContent: {
    padding: 16,
  },
  errorText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
  },
  branchCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
  },
  branchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  branchText: {
    fontSize: 16,
    fontWeight: '600',
  },
  branchLabel: {
    fontSize: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  fileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    gap: 12,
  },
  fileName: {
    fontSize: 15,
  },
  issueStats: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  issueStat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  issueStatText: {
    fontSize: 14,
    fontWeight: '500',
  },
  issueCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
  },
  issueHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 8,
  },
  issueTitle: {
    fontSize: 15,
    fontWeight: '500',
    flex: 1,
    lineHeight: 20,
  },
  issueNumber: {
    fontSize: 13,
    marginBottom: 8,
  },
  labelsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 8,
  },
  label: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
  },
  labelText: {
    fontSize: 11,
    fontWeight: '500',
  },
  issueFooter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  issueMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  issueMetaText: {
    fontSize: 12,
  },
  prStats: {
    flexDirection: 'row',
    gap: 12,
  },
  prStatText: {
    fontSize: 13,
    fontWeight: '600',
  },
  aboutCard: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  aboutDescription: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  topicsSection: {
    marginBottom: 16,
  },
  topicsTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8,
  },
  topicsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  topicBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  topicText: {
    fontSize: 12,
    fontWeight: '500',
  },
  aboutInfo: {
    gap: 8,
  },
  aboutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  aboutText: {
    fontSize: 14,
  },
});
