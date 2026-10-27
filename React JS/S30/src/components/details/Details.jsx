import React from 'react'

const Details = () => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden rounded-2xl bg-white shadow-lg">
      {/* Cover */}
      <div className="h-28 bg-gradient-to-r from-indigo-500 to-purple-600" />

      {/* Profile Content */}
      <div className="relative px-6 pb-6">
        {/* Avatar */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
          />
        </div>

        {/* User Info */}
        <div className="pt-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            John Doe
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            @johndoe
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-600">
            Frontend Developer passionate about React, UI/UX, and
            building beautiful web experiences.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 divide-x rounded-xl bg-gray-50 py-4">
          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">120</p>
            <p className="text-xs text-gray-500">Posts</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">2.4K</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>

          <div className="text-center">
            <p className="text-lg font-bold text-gray-900">180</p>
            <p className="text-xs text-gray-500">Following</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <button className="flex-1 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700">
            Follow
          </button>

          <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};



export default Details