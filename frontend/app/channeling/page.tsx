"use client";

import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  onClick?: () => void;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-150 ease-in-out bg-white"
    >
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default function ChannelingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        {/* Header Section */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Welcome To Unicare Treatment
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Experience world-class treatment with our comprehensive channeling
            services. Manage appointments, upload lab reports, and stay informed
            with real-time updates—all in one place.
          </p>
        </header>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Channeling"
            description="Connect seamlessly with top healthcare professionals."
            onClick={() => alert("Channeling clicked")}
          />
          <FeatureCard
            title="Upload LAB Reports"
            description="Easily upload and view your lab results online."
            onClick={() => alert("Upload LAB Reports clicked")}
          />
          <FeatureCard
            title="My Appointments"
            description="Manage and review your upcoming appointments."
            onClick={() => alert("My Appointments clicked")}
          />
          <FeatureCard
            title="Check Ongoing Number"
            description="Monitor your current queue status in real time."
            onClick={() => alert("Check Ongoing Number clicked")}
          />
        </div>
      </div>
    </div>
  );
}

