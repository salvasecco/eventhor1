// Mock data for dashboard demonstrations

export const mockVideos = [
  {
    id: '1',
    title: 'How to Create Viral TikToks',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop',
    duration: 45,
    analysisScore: 92,
    engagementPrediction: 'High',
    createdAt: '2024-01-15',
    platform: 'TikTok',
    narrativeStyle: 'Tutorial'
  },
  {
    id: '2',
    title: 'Product Launch Announcement',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
    duration: 60,
    analysisScore: 78,
    engagementPrediction: 'Medium',
    createdAt: '2024-01-12',
    platform: 'Instagram',
    narrativeStyle: 'Product Demo'
  },
  {
    id: '3',
    title: 'Behind the Scenes Content',
    thumbnail: 'https://images.unsplash.com/photo-1492619392013-e19e3c561e90?w=300&h=200&fit=crop',
    duration: 30,
    analysisScore: 85,
    engagementPrediction: 'High',
    createdAt: '2024-01-10',
    platform: 'YouTube Shorts',
    narrativeStyle: 'Storytelling'
  }
];

export const mockAnalytics = {
  totalAnalyses: 247,
  averageImprovement: 42,
  timeSaved: 156,
  totalViews: '2.1M'
};

export const mockComparisonData = {
  videoA: {
    id: 'a1',
    title: 'Original Video',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=200&fit=crop',
    scores: {
      engagement: 72,
      retention: 68,
      clarity: 85,
      emotional: 74,
      hook: 66,
      cta: 70
    }
  },
  videoB: {
    id: 'b1',
    title: 'Optimized Version',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
    scores: {
      engagement: 89,
      retention: 92,
      clarity: 88,
      emotional: 86,
      hook: 94,
      cta: 82
    }
  }
};

export const mockSuggestions = [
  {
    id: '1',
    type: 'hook',
    title: 'Stronger Opening Hook',
    description: 'Try starting with: "Nobody tells you this about..."',
    impact: 'High',
    category: 'Opening'
  },
  {
    id: '2',
    type: 'visual',
    title: 'Optimize Cut Points',
    description: 'Insert dramatic pause at second 4 for better retention',
    impact: 'Medium',
    category: 'Editing'
  },
  {
    id: '3',
    type: 'script',
    title: 'Reorder Content',
    description: 'Move the revelation to the beginning for higher engagement',
    impact: 'High',
    category: 'Structure'
  }
];

export const mockHooks = [
  {
    id: '1',
    text: 'POV: You just discovered...',
    category: 'Problem-Solution',
    performance: 94,
    platform: 'TikTok'
  },
  {
    id: '2',
    text: 'This mistake costs you 90% of your...',
    category: 'Educational',
    performance: 89,
    platform: 'Instagram'
  },
  {
    id: '3',
    text: 'Everyone does this wrong...',
    category: 'Controversy',
    performance: 92,
    platform: 'YouTube'
  }
];

export const mockChartData = [
  { date: '2024-01-01', analyses: 12, improvement: 35 },
  { date: '2024-01-02', analyses: 18, improvement: 42 },
  { date: '2024-01-03', analyses: 15, improvement: 38 },
  { date: '2024-01-04', analyses: 22, improvement: 45 },
  { date: '2024-01-05', analyses: 25, improvement: 48 },
  { date: '2024-01-06', analyses: 19, improvement: 41 },
  { date: '2024-01-07', analyses: 31, improvement: 52 }
];