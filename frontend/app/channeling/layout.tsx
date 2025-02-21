import type { Metadata } from "next";
import "./channeling.css";


export const metadata: Metadata = {
  title: "Channeling",
  description: "Manage your appointments efficiently",
};

export default function ChannelingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}