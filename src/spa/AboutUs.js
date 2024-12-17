import React from "react";
import "./style.css"; // Import a CSS file for styling
import { About } from "../content/DynamicContent";

function AboutUs() {
  const { header, story, mission, team } = About;
  return (
    <section className="about-us">
      {/* About Us Header */}
      <div className="about-header">
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>

      {/* Our Story */}
      <div className="about-story">
        <h2>{story.title}</h2>
        <p>{story.description}</p>
      </div>

      {/* Our Mission */}
      <div className="about-mission">
        <h2>{mission.title}</h2>
        <p>{mission.description}</p>
      </div>

      {/* Team Section */}
      <div className="about-team">
        <h2>{team.title}</h2>
        <div className="team-members">
          {team.members.map((member, index) => (
            <div key={index} className="team-card">
              <img
                src={member.image}
                alt={`Team Member ${index + 1}`}
                className="team-image"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
