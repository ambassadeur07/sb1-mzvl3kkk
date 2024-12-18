import React from 'react';
import { VideoProject } from '../types';
import { ScenePreview } from './video/ScenePreview';
import { VideoControls } from './video/VideoControls';

interface ProjectPreviewProps {
  project: VideoProject;
}

export function ProjectPreview({ project }: ProjectPreviewProps) {
  const currentScene = project.scenes[0];

  return (
    <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative aspect-video bg-gray-900">
        {currentScene?.mediaAssets[0]?.url && (
          <img
            src={currentScene.mediaAssets[0].url}
            alt={currentScene.content}
            className="w-full h-full object-cover"
          />
        )}
        
        <VideoControls duration={currentScene?.duration || 0} />
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-medium text-gray-900">Script</h3>
          <p className="text-gray-600 text-sm mt-1">{project.script}</p>
        </div>

        <div>
          <h3 className="font-medium text-gray-900">Scenes</h3>
          <div className="mt-2 grid grid-cols-4 gap-2">
            {project.scenes.map((scene) => (
              <ScenePreview key={scene.id} scene={scene} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}