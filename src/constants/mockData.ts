import { VideoProject, Character } from '../types';

export const mockCharacter: Character = {
  id: '1',
  name: 'Sarah',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150',
  videoPresets: [
    {
      id: '1',
      type: 'talking',
      label: 'Casual Talk',
      videoUrl: 'https://example.com/videos/casual-talk.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150'
    },
    {
      id: '2',
      type: 'gesture',
      label: 'Explaining',
      videoUrl: 'https://example.com/videos/explaining.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150'
    },
    {
      id: '3',
      type: 'emotion',
      label: 'Happy',
      videoUrl: 'https://example.com/videos/happy.mp4',
      thumbnailUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150'
    }
  ]
};

export const mockProject: VideoProject = {
  id: '1',
  userId: '1',
  prompt: 'Create a professional introduction video',
  script: 'Hi, I\'m Sarah, and I\'ll be your virtual assistant today. Let me help you understand our services...',
  character: mockCharacter,
  scenes: [
    {
      id: '1',
      content: 'Introduction with warm greeting',
      duration: 5,
      characterAction: mockCharacter.videoPresets[0],
      mediaAssets: [
        {
          id: '1',
          type: 'video',
          url: mockCharacter.videoPresets[0].videoUrl,
          metadata: {
            duration: 5
          }
        }
      ],
      transitions: {
        type: 'fade',
        duration: 0.5
      }
    }
  ],
  voiceover: {
    id: '1',
    text: 'Hi, I\'m Sarah, and I\'ll be your virtual assistant today.',
    language: 'en',
    accent: 'neutral',
    audioUrl: ''
  },
  music: {
    id: '1',
    url: '',
    title: 'Soft Background'
  },
  subtitles: [],
  status: 'generated',
  createdAt: new Date(),
  updatedAt: new Date()
};