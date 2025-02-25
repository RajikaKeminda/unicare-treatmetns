"use client";

import { ChannelAppointmentForm } from "@/components/ui/forms/ChannelAppointmentForm";

export default function ChannelAppointment() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-black text-3xl font-bold text-center mb-6">
        This is channeling appointment page
      </h1>
      <ChannelAppointmentForm />
    </div>
  );
}