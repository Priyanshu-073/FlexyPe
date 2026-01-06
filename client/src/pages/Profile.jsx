import { useState } from "react";
import { mockProfile } from "../data/mockProfile";
import ProfileHero from "../components/profile/ProfileHero";
import ProfileStats from "../components/profile/ProfileStats";
import Interests from "../components/profile/Interests";
import ActivityTimeline from "../components/profile/ActivityTimeline";
import Analytics from "../components/profile/Analytics";
import DashboardLayout from "../components/layout/DashboardLayout";


export default function Profile() {
  const [interests, setInterests] = useState(mockProfile.interests);

  const stats = [
    { label: "Activities", value: 42, trend: 12, icon: "📊" },
    { label: "Points", value: 860, trend: 8, icon: "⭐" },
    { label: "Interests", value: interests.length, trend: 5, icon: "❤️" },
    { label: "Member Since", value: "Aug 2024", trend: 0, icon: "📅" }
  ];

  return (
    <DashboardLayout>
      <ProfileHero profile={mockProfile} />
      <ProfileStats stats={stats} />
      <Interests interests={interests} setInterests={setInterests} />
      <Analytics />
      <ActivityTimeline />
    </DashboardLayout>
  );
}
