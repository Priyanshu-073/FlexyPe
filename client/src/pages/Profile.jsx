import { mockProfile } from "../data/mockProfile";
import ProfileHero from "../components/profile/ProfileHero";
import ProfileStats from "../components/profile/ProfileStats";
import ThemeToggle from "../components/ThemeToggle";

export default function Profile() {
  return (
    <div className="profile-page">
      <ThemeToggle />
      <ProfileHero profile={mockProfile} />
      <ProfileStats stats={mockProfile.stats} />
    </div>
  );
}
