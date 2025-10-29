import React from "react";
import { useUser } from "../context/UserContext1";
import { FaUser, FaEnvelope, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function ProfileDetails() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  if (!user || !user.un?.trim()) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
          <h3 className="text-red-600 text-2xl font-semibold mb-2">Access Denied</h3>
          <p className="text-gray-600 text-lg">Please log in to see your profile.</p>
        </div>
      </div>
    );
  }

  const lastLogin = new Date(user.lastLogin || Date.now()).toLocaleString();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl font-bold mb-3">
            {user.un[0].toUpperCase()}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{user.un}</h2>
          <span className="mt-1 text-sm text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">
            Member
          </span>
        </div>

        {/* Profile Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
            <FaUser className="text-gray-500" />
            <span className="text-gray-800 font-medium">{user.un}</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
            <FaEnvelope className="text-gray-500" />
            <span className="text-gray-800">{user.em || "Not provided"}</span>
          </div>
          <div className="flex items-center space-x-3 bg-gray-50 px-4 py-3 rounded-lg shadow-sm">
            <FaClock className="text-gray-500" />
            <span className="text-gray-800 text-sm">Last Login: {lastLogin}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-400 text-white font-medium rounded-lg hover:bg-gray-500 transition"
          >
            Back
          </button>
          <button
            onClick={logout}
            className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
