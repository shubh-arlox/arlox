// components/DebugHelper.jsx
'use client'; // This must be a client component to use state and console.log

import { useState, useEffect } from 'react';

export default function DebugHelper({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data) {
      console.group('🔍 Webflow Data Inspector');
      console.log('Raw Data Array:', data);
      console.log('First Item Fields:', data[0]?.fieldData);
      console.groupEnd();
    }
  }, [data]);

  if (!data || data.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-[90vw]">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mb-2 rounded bg-red-600 px-4 py-2 text-xs font-bold text-white shadow-lg hover:bg-red-700"
      >
        {isOpen ? 'Close Inspector' : '🔍 Inspect CMS Data'}
      </button>

      {/* The Inspector Window */}
      {isOpen && (
        <div className="h-[500px] w-[600px] overflow-auto rounded-lg border border-gray-700 bg-gray-900 p-4 text-xs text-green-400 shadow-2xl">
          <h3 className="mb-2 font-bold text-white border-b border-gray-700 pb-2">
            First Item Full Data:
          </h3>
          <p className="mb-4 text-gray-400">
            * Check your Browser Console (F12) for an interactive view.
          </p>
          <pre className="whitespace-pre-wrap break-all">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}