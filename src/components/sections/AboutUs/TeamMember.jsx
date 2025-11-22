import React from "react";
import "./about.css";


const TeamMembers = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Cleaning Supervisor",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
      bio: "Oversees residential and commercial cleaning operations with 8+ years of experience.",
    },
    {
      name: "Michael Rivera",
      role: "Sanitation Specialist",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      bio: "Expert in deep cleaning, disinfection, and advanced sanitation procedures.",
    },
    {
      name: "Emily Carter",
      role: "Quality Control Manager",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=800&q=80",
      bio: "Ensures high cleaning standards and customer satisfaction across all projects.",
    },
    {
      name: "James Wilson",
      role: "Operations Coordinator",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
      bio: "Manages scheduling, planning, and communication to deliver seamless service.",
    },
  ];

  return (
    <section className="team-section py-5">
      <div className="container text-center">
        <h2 className="fw-bold team-title">Meet Our Professional Team</h2>
        <p className="team-subtitle mt-2 mb-5">
          Dedicated specialists who ensure your space is spotless, safe, and comfortable.
        </p>

        <div className="row g-4 justify-content-center">
          {team.map((member, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="team-card">
                <div className="team-img-wrapper">
                  <img src={member.image} alt={member.name} className="team-img" />
                </div>
                <h4 className="team-name mt-3">{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
