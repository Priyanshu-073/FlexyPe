import { useState, useContext } from "react";
import { mockProfile } from "../data/mockProfile";
import { AuthContext } from "../context/AuthContext";
import ProfileHero from "../components/profile/ProfileHero";
import ProfileStats from "../components/profile/ProfileStats";
import Interests from "../components/profile/Interests";
import ActivityTimeline from "../components/profile/ActivityTimeline";
import Analytics from "../components/profile/Analytics";
import DashboardLayout from "../components/layout/DashboardLayout";


export default function Profile() {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState(user?.interests || mockProfile.interests);

  const stats = [
    { label: "Activities", value: 42, trend: 12, icon: "📊" },
    { label: "Points", value: 860, trend: 8, icon: "⭐" },
    { label: "Interests", value: interests.length, trend: 5, icon: "❤️" },
    { label: "Member Since", value: "Aug 2024", trend: 0, icon: "📅" }
  ];

  // Create profile object from authenticated user and mock data
  const userProfile = user ? {
    ...mockProfile,
    name: user.name,
    email: user.email,
    bio: user.bio || mockProfile.bio,
    interests: user.interests || mockProfile.interests
  } : mockProfile;

  return (
    <DashboardLayout>
      <ProfileHero profile={userProfile} />
      <ProfileStats stats={stats} />
      <Interests interests={interests} setInterests={setInterests} />
      <Analytics />
      <ActivityTimeline />
    </DashboardLayout>
  );
}
