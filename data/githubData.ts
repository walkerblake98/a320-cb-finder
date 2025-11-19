
// Mock GitHub data for the app

export interface User {
  id: string;
  username: string;
  name: string;
  avatar: string;
  bio: string;
  location: string;
  email: string;
  website: string;
  company: string;
  followers: number;
  following: number;
  publicRepos: number;
  publicGists: number;
  createdAt: string;
}

export interface Repository {
  id: string;
  name: string;
  fullName: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
  watchers: number;
  openIssues: number;
  isPrivate: boolean;
  isFork: boolean;
  updatedAt: string;
  createdAt: string;
  size: number;
  defaultBranch: string;
  topics: string[];
  license: string;
  owner: User;
}

export interface Activity {
  id: string;
  type: 'push' | 'star' | 'fork' | 'issue' | 'pull_request' | 'create' | 'watch';
  actor: User;
  repo: Repository;
  message: string;
  timestamp: string;
  details?: string;
}

export interface Issue {
  id: string;
  number: number;
  title: string;
  state: 'open' | 'closed';
  author: User;
  labels: string[];
  comments: number;
  createdAt: string;
  updatedAt: string;
}

export interface PullRequest {
  id: string;
  number: number;
  title: string;
  state: 'open' | 'closed' | 'merged';
  author: User;
  comments: number;
  additions: number;
  deletions: number;
  createdAt: string;
  updatedAt: string;
}

// Mock current user
export const currentUser: User = {
  id: '1',
  username: 'octocat',
  name: 'The Octocat',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop',
  bio: 'Building the future of software development 🚀',
  location: 'San Francisco, CA',
  email: 'octocat@github.com',
  website: 'https://github.com',
  company: '@github',
  followers: 12543,
  following: 234,
  publicRepos: 87,
  publicGists: 23,
  createdAt: '2018-01-15',
};

// Language colors
export const languageColors: { [key: string]: string } = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Swift: '#ffac45',
  Kotlin: '#A97BFF',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Shell: '#89e051',
};

// Mock repositories
export const mockRepositories: Repository[] = [
  {
    id: '1',
    name: 'react-native-app',
    fullName: 'octocat/react-native-app',
    description: 'A beautiful React Native application with modern UI components',
    language: 'TypeScript',
    languageColor: languageColors.TypeScript,
    stars: 1234,
    forks: 234,
    watchers: 89,
    openIssues: 12,
    isPrivate: false,
    isFork: false,
    updatedAt: '2024-01-15T10:30:00Z',
    createdAt: '2023-06-20T08:00:00Z',
    size: 2048,
    defaultBranch: 'main',
    topics: ['react-native', 'mobile', 'typescript', 'expo'],
    license: 'MIT',
    owner: currentUser,
  },
  {
    id: '2',
    name: 'awesome-algorithms',
    fullName: 'octocat/awesome-algorithms',
    description: 'Collection of algorithms and data structures implemented in Python',
    language: 'Python',
    languageColor: languageColors.Python,
    stars: 5678,
    forks: 892,
    watchers: 234,
    openIssues: 45,
    isPrivate: false,
    isFork: false,
    updatedAt: '2024-01-14T15:20:00Z',
    createdAt: '2022-03-10T12:00:00Z',
    size: 4096,
    defaultBranch: 'main',
    topics: ['algorithms', 'data-structures', 'python', 'computer-science'],
    license: 'MIT',
    owner: currentUser,
  },
  {
    id: '3',
    name: 'web-dashboard',
    fullName: 'octocat/web-dashboard',
    description: 'Modern web dashboard with analytics and real-time data visualization',
    language: 'JavaScript',
    languageColor: languageColors.JavaScript,
    stars: 892,
    forks: 156,
    watchers: 67,
    openIssues: 8,
    isPrivate: false,
    isFork: false,
    updatedAt: '2024-01-13T09:45:00Z',
    createdAt: '2023-09-05T14:30:00Z',
    size: 3072,
    defaultBranch: 'main',
    topics: ['dashboard', 'analytics', 'react', 'charts'],
    license: 'Apache-2.0',
    owner: currentUser,
  },
  {
    id: '4',
    name: 'go-microservices',
    fullName: 'octocat/go-microservices',
    description: 'Microservices architecture built with Go and Docker',
    language: 'Go',
    languageColor: languageColors.Go,
    stars: 2341,
    forks: 445,
    watchers: 123,
    openIssues: 23,
    isPrivate: false,
    isFork: false,
    updatedAt: '2024-01-12T16:10:00Z',
    createdAt: '2023-01-20T10:00:00Z',
    size: 5120,
    defaultBranch: 'main',
    topics: ['microservices', 'golang', 'docker', 'kubernetes'],
    license: 'MIT',
    owner: currentUser,
  },
  {
    id: '5',
    name: 'rust-cli-tools',
    fullName: 'octocat/rust-cli-tools',
    description: 'Collection of command-line tools written in Rust',
    language: 'Rust',
    languageColor: languageColors.Rust,
    stars: 3456,
    forks: 567,
    watchers: 189,
    openIssues: 15,
    isPrivate: false,
    isFork: false,
    updatedAt: '2024-01-11T11:25:00Z',
    createdAt: '2022-11-15T09:00:00Z',
    size: 1536,
    defaultBranch: 'main',
    topics: ['rust', 'cli', 'tools', 'command-line'],
    license: 'MIT',
    owner: currentUser,
  },
  {
    id: '6',
    name: 'ios-weather-app',
    fullName: 'octocat/ios-weather-app',
    description: 'Beautiful weather app for iOS with SwiftUI',
    language: 'Swift',
    languageColor: languageColors.Swift,
    stars: 678,
    forks: 89,
    watchers: 45,
    openIssues: 5,
    isPrivate: false,
    isFork: false,
    updatedAt: '2024-01-10T14:50:00Z',
    createdAt: '2023-07-12T16:00:00Z',
    size: 2560,
    defaultBranch: 'main',
    topics: ['ios', 'swift', 'swiftui', 'weather'],
    license: 'MIT',
    owner: currentUser,
  },
];

// Mock activities
export const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'push',
    actor: currentUser,
    repo: mockRepositories[0],
    message: 'Pushed 3 commits to main',
    timestamp: '2024-01-15T10:30:00Z',
    details: 'Added new authentication flow',
  },
  {
    id: '2',
    type: 'star',
    actor: currentUser,
    repo: mockRepositories[1],
    message: 'Starred awesome-algorithms',
    timestamp: '2024-01-15T09:15:00Z',
  },
  {
    id: '3',
    type: 'create',
    actor: currentUser,
    repo: mockRepositories[2],
    message: 'Created repository web-dashboard',
    timestamp: '2024-01-14T16:45:00Z',
  },
  {
    id: '4',
    type: 'issue',
    actor: currentUser,
    repo: mockRepositories[3],
    message: 'Opened issue #45 in go-microservices',
    timestamp: '2024-01-14T14:20:00Z',
    details: 'Add support for Redis caching',
  },
  {
    id: '5',
    type: 'pull_request',
    actor: currentUser,
    repo: mockRepositories[4],
    message: 'Opened pull request #23 in rust-cli-tools',
    timestamp: '2024-01-13T11:30:00Z',
    details: 'Implement new file parser',
  },
  {
    id: '6',
    type: 'fork',
    actor: currentUser,
    repo: mockRepositories[5],
    message: 'Forked ios-weather-app',
    timestamp: '2024-01-13T08:45:00Z',
  },
];

// Mock issues
export const mockIssues: Issue[] = [
  {
    id: '1',
    number: 45,
    title: 'Add support for Redis caching',
    state: 'open',
    author: currentUser,
    labels: ['enhancement', 'help wanted'],
    comments: 5,
    createdAt: '2024-01-14T14:20:00Z',
    updatedAt: '2024-01-15T09:30:00Z',
  },
  {
    id: '2',
    number: 44,
    title: 'Fix memory leak in worker pool',
    state: 'closed',
    author: currentUser,
    labels: ['bug', 'critical'],
    comments: 12,
    createdAt: '2024-01-10T10:15:00Z',
    updatedAt: '2024-01-13T16:45:00Z',
  },
  {
    id: '3',
    number: 43,
    title: 'Update documentation for API endpoints',
    state: 'open',
    author: currentUser,
    labels: ['documentation'],
    comments: 3,
    createdAt: '2024-01-08T11:20:00Z',
    updatedAt: '2024-01-12T14:30:00Z',
  },
];

// Mock pull requests
export const mockPullRequests: PullRequest[] = [
  {
    id: '1',
    number: 23,
    title: 'Implement new file parser',
    state: 'open',
    author: currentUser,
    comments: 8,
    additions: 234,
    deletions: 56,
    createdAt: '2024-01-13T11:30:00Z',
    updatedAt: '2024-01-15T10:15:00Z',
  },
  {
    id: '2',
    number: 22,
    title: 'Add unit tests for core modules',
    state: 'merged',
    author: currentUser,
    comments: 15,
    additions: 567,
    deletions: 23,
    createdAt: '2024-01-05T09:20:00Z',
    updatedAt: '2024-01-10T16:30:00Z',
  },
];
