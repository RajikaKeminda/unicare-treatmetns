"use client";

import React from "react";
import Link from "next/link";

export interface FeatureCardProps {
  title: string;
  description: string;
  href?: string; // Optional URL for navigation
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, href, onClick }) => {
  const content = (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition duration-150 ease-in-out bg-white"
    >
      <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );

  // If an href is provided, wrap the content in a Link for navigation
  if (href) {
    return (
      <Link href={href}>
        {content}
      </Link>
    );
  }

  // Otherwise, just render the content with any onClick behavior
  return content;
};

export default FeatureCard;
