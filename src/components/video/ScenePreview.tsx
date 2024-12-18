import React from 'react';
import { Scene } from '../../types';

interface ScenePreviewProps {
  scene: Scene;
}

export function ScenePreview({ scene }: ScenePreviewProps) {
  return (
    <div className="aspect-video bg-gray-100 rounded overflow-hidden">
      {scene.mediaAssets[0]?.url && (
        <img
          src={scene.mediaAssets[0].url}
          alt={scene.content}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}