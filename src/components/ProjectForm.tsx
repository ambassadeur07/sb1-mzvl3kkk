import React, { useState } from 'react';
import { Video } from 'lucide-react';
import { Button } from './ui/Button';

interface ProjectFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export function ProjectForm({ onSubmit, isLoading }: ProjectFormProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim().length >= 10) {
      onSubmit(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-4">
      <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
        <Video className="w-8 h-8" />
        <h1>AI Video Generator</h1>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">
          Describe your video
        </label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full h-32 p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe the video you want to create..."
          disabled={isLoading}
        />
      </div>

      <Button
        type="submit"
        disabled={prompt.length < 10}
        isLoading={isLoading}
        className="w-full"
      >
        Generate Video
      </Button>
    </form>
  );
}