import React from "react";
import "./about.css";


const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Cleaning Supervisor",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
    bio: "Oversees residential and commercial cleaning operations with 8+ years of experience.",
    socials: { linkedin: "#", email: "#" }
  },
  {
    id: 2,
    name: "Michael Rivera",
    role: "Sanitation Specialist",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80", 
    bio: "Expert in deep cleaning, disinfection, and advanced sanitation procedures.",
    socials: { linkedin: "#", email: "#" }
  },
  {
  
  
    id: 3,
    name: "James Wilson",
    role: "Operations Coordinator",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80",
    bio: "Manages scheduling, planning, and communication to deliver seamless service.",
    socials: { linkedin: "#", email: "#" }
  },
];

const TeamMembers = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-uppercase text-primary fw-bold tracking-wide">Our Experts</span>
          <h2 className="fw-bold team-title mt-2">Meet Our Professional Team</h2>
          <p className="team-subtitle text-muted mx-auto">
            Dedicated specialists who ensure your space is spotless, safe, and comfortable.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamMembers.map((member) => (
            <div className="col-12 col-sm-6 col-lg-3" key={member.id}>
              <div className="team-card h-100">
                <div className="team-img-wrapper">
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`} 
                    className="team-img" 
                    loading="lazy" 
                  />
               
                  <div className="social-overlay">
                     <a href={member.socials.email} className="social-link">✉️</a>
                     <a href={member.socials.linkedin} className="social-link">in</a>
                  </div>
                </div>
                
                <div className="team-body">
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role text-primary">{member.role}</p>
                  <div className="divider"></div>
                  <p className="team-bio text-muted">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;