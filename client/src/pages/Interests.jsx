import { useState } from "react";
import { mockProfile } from "../data/mockProfile";
import Interests from "../components/profile/Interests";
import DashboardLayout from "../components/layout/DashboardLayout";

export default function InterestsPage() {
  const [interests, setInterests] = useState(mockProfile.interests);

  return (
    <DashboardLayout>
      <div className="interests-page">
        <h1 className="page-title">My Interests</h1>
        <Interests interests={interests} setInterests={setInterests} />
      </div>
    </DashboardLayout>
  );
}
