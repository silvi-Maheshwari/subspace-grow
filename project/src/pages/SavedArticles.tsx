import React from 'react';
import { Bookmark } from 'lucide-react';

export default function SavedArticles() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Saved Articles</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="text-center py-12">
          <Bookmark className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No saved articles</h3>
          <p className="mt-1 text-sm text-gray-500">
            Articles you save will appear here for later reading.
          </p>
        </div>
      </div>
    </div>
  );
}