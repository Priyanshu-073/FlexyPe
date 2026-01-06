import { mockProfile } from "../data/mockProfile";
import ProfileHero from "../components/profile/ProfileHero";
import ProfileStats from "../components/profile/ProfileStats";
import ActivityTimeline from "../components/profile/ActivityTimeline";
import ThemeToggle from "../components/ThemeToggle";

export default function Profile() {
  return (
    <div className="profile-page">
      <ThemeToggle />
      <ProfileHero profile={mockProfile} />
      <ProfileStats stats={mockProfile.stats} />
      <ActivityTimeline />
    </div>
  );
}
