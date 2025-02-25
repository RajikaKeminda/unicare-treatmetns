"use client";

import { ChannelAppointmentForm } from "@/components/ui/forms/ChannelAppointmentForm";

export default function CheckQueueNo() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-black text-3xl font-bold text-center mb-6">
        This page is for checking current ongoing queue number
      </h1>
      <ChannelAppointmentForm />
    </div>
  );
}