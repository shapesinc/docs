// components/EngineFilterList.js
import React, { useState } from "react";
import enginesData from "../data/engines.json"; // Import data from JSON file

export default function EngineFilterList() {
  const [filters, setFilters] = useState([]);
  const [showPremium, setShowPremium] = useState(true);
  const [showFree, setShowFree] = useState(true);

  const capabilities = [
    { key: "thinking", label: "Thinking", icon: "🧠" },
    { key: "roleplay", label: "Roleplay", icon: "🎭" },
    { key: "intelligence", label: "Intelligence", icon: "📚" },
    { key: "skills", label: "Skills", icon: "🛠️" },
    { key: "human_like", label: "Human-like", icon: "👤" },
    { key: "image", label: "Image Support", icon: "🖼️" }
  ];

  const toggleFilter = (capability) => {
    setFilters((prev) =>
      prev.includes(capability) 
        ? prev.filter((f) => f !== capability) 
        : [...prev, capability]
    );
  };

  const filterEngines = (engines) => {
    if (filters.length === 0) return engines;
    return engines.filter((engine) =>
      filters.every((filter) => engine.capabilities[filter] === true)
    );
  };

  const filteredPremium = showPremium ? filterEngines(enginesData.premium) : [];
  const filteredFree = showFree ? filterEngines(enginesData.free) : [];
  const totalResults = filteredPremium.length + filteredFree.length;

  return (
    <div className="engine-filter-container">
      <div className="filter-box">
        <h3 className="filter-title">Filter by Capabilities</h3>
        <div className="filter-buttons">
          {capabilities.map((cap) => (
            <button
              key={cap.key}
              onClick={() => toggleFilter(cap.key)}
              className={`filter-button ${filters.includes(cap.key) ? 'active' : ''}`}
            >
              <span>{cap.icon}</span>
              {cap.label}
            </button>
          ))}
        </div>
        
        <div className="checkbox-group">
          <span className="text-sm font-medium">Show:</span>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showPremium}
              onChange={(e) => setShowPremium(e.target.checked)}
              className="w-4 h-4"
            />
            <span>Premium ({enginesData.premium.length})</span>
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showFree}
              onChange={(e) => setShowFree(e.target.checked)}
              className="w-4 h-4"
            />
            <span>Free ({enginesData.free.length})</span>
          </label>
        </div>

        {filters.length > 0 && (
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={() => setFilters([])}
              className="clear-filters"
            >
              Clear all filters
            </button>
            <span className="text-sm">
              ({totalResults} {totalResults === 1 ? 'result' : 'results'})
            </span>
          </div>
        )}
      </div>

      {showPremium && filteredPremium.length > 0 && (
        <div>
          <h2 className="section-title">
            <span className="premium-badge">Premium</span>
            <span>({filteredPremium.length})</span>
          </h2>
          <div className="engine-grid">
            {filteredPremium.map((engine) => (
              <EngineCard key={engine.name} engine={engine} tier="premium" />
            ))}
          </div>
        </div>
      )}

      {showFree && filteredFree.length > 0 && (
        <div>
          <h2 className="section-title">
            <span className="free-badge">Free</span>
            <span>({filteredFree.length})</span>
          </h2>
          <div className="engine-grid">
            {filteredFree.map((engine) => (
              <EngineCard key={engine.name} engine={engine} tier="free" />
            ))}
          </div>
        </div>
      )}

      {totalResults === 0 && (
        <div className="no-results">
          <p className="no-results-text">
            No engines match your selected filters.
          </p>
          <button
            onClick={() => setFilters([])}
            className="no-results-button"
          >
            Clear filters to see all engines
          </button>
        </div>
      )}
    </div>
  );
}

function EngineCard({ engine, tier }) {
  const capabilityIcons = {
    thinking: "🧠",
    roleplay: "🎭",
    intelligence: "📚",
    skills: "🛠️",
    human_like: "👤",
    image: "🖼️"
  };

  const activeCapabilities = Object.entries(engine.capabilities)
    .filter(([_, value]) => value === true)
    .map(([key, _]) => key);

  return (
    <div className="engine-card">
      <div className="flex items-start justify-between mb-2">
        <h3 className="engine-card-title">{engine.name}</h3>
        {tier === "premium" && (
          <span className="premium-badge">Premium</span>
        )}
      </div>
      
      <p className="engine-card-description">{engine.description || "No description available."}</p>
      
      <div className="capability-tags">
        {activeCapabilities.map((cap) => (
          <span
            key={cap}
            className="capability-tag"
            title={cap.replace('_', ' ')}
          >
            {capabilityIcons[cap]} {cap.replace('_', ' ')}
          </span>
        ))}
      </div>
    </div>
  );
}