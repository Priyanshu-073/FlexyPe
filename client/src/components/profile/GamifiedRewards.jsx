import { useState } from "react";

export default function GamifiedRewards() {
  const [spun, setSpun] = useState(false);
  const [reward, setReward] = useState(null);
  const [canSpin, setCanSpin] = useState(true);
  const [spinCount, setSpinCount] = useState(0);
  const [rotation, setRotation] = useState(0);

  const rewards = [
    { id: 1, icon: "🎁", title: "10% OFF", description: "Get 10% discount on your next purchase", color: "#ff6b6b" },
    { id: 2, icon: "💝", title: "FREE SHIPPING", description: "Free shipping on orders over $50", color: "#4ecdc4" },
    { id: 3, icon: "⭐", title: "BONUS POINTS", description: "Earn 50 extra reward points", color: "#45b7d1" },
    { id: 4, icon: "🎉", title: "20% OFF", description: "Get 20% discount on next order", color: "#f9ca24" },
    { id: 5, icon: "🏆", title: "VIP STATUS", description: "Unlock VIP member benefits", color: "#6c5ce7" },
    { id: 6, icon: "💎", title: "LUCKY DAY", description: "Random reward worth $5-$25", color: "#a29bfe" }
  ];

  const handleSpin = () => {
    if (!canSpin) return;

    setSpun(true);
    setCanSpin(false);

    const randomIndex = Math.floor(Math.random() * rewards.length);
    const newRotation = Math.floor(Math.random() * 360) + (360 * 5);
    setRotation(newRotation);

    setTimeout(() => {
      setReward(rewards[randomIndex]);
      setSpinCount(spinCount + 1);
      
      setTimeout(() => {
        setCanSpin(true);
      }, 5000);
    }, 2000);
  };

  return (
    <div className="gamified-rewards glass">
      <div className="rewards-header">
        <h3>🎮 Daily Spin & Win</h3>
        <p>Spin the wheel to win amazing coupons and discounts!</p>
      </div>

      <div className="rewards-content">
        <div className="spin-wheel-container">
          <div className="wheel-wrapper">
            <div className="pointer"></div>
            <svg
              className={`spin-wheel ${spun ? "spinning" : ""}`}
              viewBox="0 0 300 300"
              style={{ transform: `rotate(${rotation}deg)` }}
            >
              {rewards.map((reward, index) => {
                const angle = (index * 360) / rewards.length;
                const startAngle = angle * (Math.PI / 180);
                const endAngle = ((angle + 60) * Math.PI) / 180;

                return (
                  <g key={reward.id}>
                    {/* Pie Segment */}
                    <path
                      d={`M 150 150 L ${150 + 140 * Math.cos(startAngle)} ${150 + 140 * Math.sin(startAngle)} A 140 140 0 0 1 ${150 + 140 * Math.cos(endAngle)} ${150 + 140 * Math.sin(endAngle)} Z`}
                      fill={reward.color}
                      stroke="white"
                      strokeWidth="2"
                    />
                    {/* Icon */}
                    <text
                      x={150 + 95 * Math.cos((startAngle + endAngle) / 2)}
                      y={150 + 95 * Math.sin((startAngle + endAngle) / 2)}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="24"
                      fontWeight="bold"
                    >
                      {reward.icon}
                    </text>
                  </g>
                );
              })}
              {/* Center Circle */}
              <circle cx="150" cy="150" r="40" fill="white" stroke="#6366f1" strokeWidth="3" />
              <text
                x="150"
                y="150"
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="12"
                fontWeight="bold"
                fill="#6366f1"
              >
                SPIN
              </text>
            </svg>
          </div>
          
          <button
            className={`spin-btn ${!canSpin ? "disabled" : ""}`}
            onClick={handleSpin}
            disabled={!canSpin}
          >
            {canSpin ? "🎯 SPIN NOW" : "⏳ TOMORROW"}
          </button>
        </div>

        {reward && (
          <div className="reward-result glass">
            <div className="reward-icon">{reward.icon}</div>
            <h4>{reward.title}</h4>
            <p>{reward.description}</p>
            <button className="claim-btn">🏆 Claim Reward</button>
          </div>
        )}
      </div>

      <div className="rewards-stats">
        <div className="stat">
          <span className="stat-label">Times Spun</span>
          <span className="stat-value">{spinCount}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Next Spin</span>
          <span className="stat-value">{canSpin ? "Ready" : "Tomorrow"}</span>
        </div>
      </div>
    </div>
  );
}
