import { useEffect, useState } from "react";

export default function ProfileHero({ profile }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className={`profile-hero glass ${visible ? "show" : ""}`}>
      <h1>{profile.name}</h1>
      <span className="tier">{profile.tier}</span>
      <p>{profile.tagline}</p>
    </div>
  );
}
