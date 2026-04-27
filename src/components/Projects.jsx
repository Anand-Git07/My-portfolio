import React, { useEffect, useRef } from 'react';
import { projects } from '../data/portfolio';
import './Projects.css';

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="section-inner">
        <p className="section-label">03 — Projects</p>
        <h2 className="section-title">Things I've Built</h2>
        <p className="section-sub">
          A mix of games, web apps, and tools — each one a step forward in my journey.
        </p>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-card animate-in"
              ref={(el) => { if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el); }}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="project-card__header">
                <div className="project-card__icon" style={{ background: project.iconBg }}>
                  {project.icon}
                </div>
                <a href={project.link} className="project-card__arrow" target="_blank" rel="noreferrer">
                  ↗
                </a>
              </div>

              <div className="project-card__body">
                <p className="project-card__type">{project.type}</p>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.desc}</p>
                <div className="project-card__stack">
                  {project.stack.map((tech, j) => (
                    <span key={j} className="pstack-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
