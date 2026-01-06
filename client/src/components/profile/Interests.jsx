import { useState } from "react";

export default function Interests({ interests, setInterests }) {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState("");

  const addInterest = () => {
    if (!input.trim()) return;
    if (interests.includes(input)) return;

    setInterests([...interests, input]);
    setInput("");
  };

  const removeInterest = (interest) => {
    setInterests(interests.filter(i => i !== interest));
  };

  return (
    <div className="interests glass">
      <div className="interests-header">
        <h2>Your Interests</h2>
        <button onClick={() => setEditing(!editing)}>
          {editing ? "Done" : "Edit"}
        </button>
      </div>

      <div className="interests-list">
        {interests.map((interest) => (
          <span key={interest} className="interest-chip">
            {interest}
            {editing && (
              <button
                className="remove"
                onClick={() => removeInterest(interest)}
              >
                ×
              </button>
            )}
          </span>
        ))}
      </div>

      {editing && (
        <div className="interest-input">
          <input
            placeholder="Add interest"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addInterest()}
          />
          <button onClick={addInterest}>Add</button>
        </div>
      )}
    </div>
  );
}
