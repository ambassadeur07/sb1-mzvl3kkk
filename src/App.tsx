import React, { useState } from 'react';
import { ProjectForm } from './components/ProjectForm';
import { ProjectPreview } from './components/ProjectPreview';
import { LoadingSpinner } from './components/ui/LoadingSpinner';
import { VideoProject } from './types';
import { mockProject } from './constants/mockData';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [project, setProject] = useState<VideoProject | null>(null);

  const handleGenerateVideo = async (prompt: string) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setProject(mockProject);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        <ProjectForm onSubmit={handleGenerateVideo} isLoading={isLoading} />
        {isLoading && <LoadingSpinner />}
        {project && <ProjectPreview project={project} />}
      </div>
    </div>
  );
}

export default App;