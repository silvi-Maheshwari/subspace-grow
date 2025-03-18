import React from 'react';

export default function Preferences() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">News Preferences</h1>
      <div className="bg-white shadow rounded-lg p-6 space-y-6">
        <div>
          <h2 className="text-lg font-medium mb-3">Topics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Technology', 'Politics', 'Sports', 'Business', 'Entertainment', 'Science'].map((topic) => (
              <label key={topic} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span className="text-gray-700">{topic}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">Keywords</h2>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Enter keywords (e.g., AI, Budget, Cricket)"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <p className="text-sm text-gray-500">Separate multiple keywords with commas</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-3">News Sources</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['BBC', 'CNN', 'Reuters', 'Associated Press', 'The Guardian', 'Bloomberg'].map((source) => (
              <label key={source} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                <span className="text-gray-700">{source}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button className="w-full sm:w-auto px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}