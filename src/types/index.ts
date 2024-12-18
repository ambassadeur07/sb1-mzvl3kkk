export interface VideoProject {
  id: string;
  userId: string;
  prompt: string;
  script: string;
  character: Character;
  scenes: Scene[];
  voiceover: VoiceOver;
  music: AudioTrack;
  subtitles: Subtitle[];
  status: ProjectStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Character {
  id: string;
  name: string;
  avatarUrl: string;
  videoPresets: CharacterVideoPreset[];
}

export interface CharacterVideoPreset {
  id: string;
  type: 'talking' | 'gesture' | 'emotion';
  label: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface Scene {
  id: string;
  content: string;
  duration: number;
  mediaAssets: MediaAsset[];
  characterAction?: CharacterVideoPreset;
  transitions: Transition;
}

export interface MediaAsset {
  id: string;
  type: 'image' | 'video';
  url: string;
  metadata: AssetMetadata;
}

export interface VoiceOver {
  id: string;
  text: string;
  language: string;
  accent: string;
  audioUrl: string;
}

export interface AudioTrack {
  id: string;
  url: string;
  title: string;
}

export interface Subtitle {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
}

export interface AssetMetadata {
  width?: number;
  height?: number;
  duration?: number;
  format?: string;
}

export interface Transition {
  type: 'fade' | 'slide' | 'dissolve';
  duration: number;
}

export type ProjectStatus = 'pending' | 'generating' | 'generated' | 'failed';