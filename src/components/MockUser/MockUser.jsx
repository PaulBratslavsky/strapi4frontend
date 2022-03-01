import React from "react";

export default function MockUser() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-between">
        <span className="mb-2 inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
          <span className="text-gray-800 mr-1">u:</span>testuser@email.com
        </span>
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800">
          <span className="text-gray-800 mr-1">p:</span>testuser
        </span>
      </div>
    </div>
  );
}
