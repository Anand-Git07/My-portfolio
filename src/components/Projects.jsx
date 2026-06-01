import React, { useEffect, useRef } from 'react';
import { projects } from '../data/portfolio';
import './Projects.css';

const Projects = () => {
  const cardsRef = useRef([]);
  const featuredProject = projects.find((project) => project.featured);
  const projectList = featuredProject
    ? projects.filter((project) => project !== featuredProject)
    : projects;

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
          Full-stack apps, AI experiments, and interactive builds with real product thinking behind them.
        </p>

        {featuredProject && (
          <a
            href={featuredProject.link}
            className="featured-project animate-in"
            target="_blank"
            rel="noreferrer"
            ref={(el) => { if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el); }}
          >
            {featuredProject.screenshots ? (
              <div className="featured-project__showcase">
                <img
                  src={featuredProject.screenshots[0].src}
                  alt={featuredProject.screenshots[0].alt}
                  className="showcase-shot showcase-shot--base"
                />
                <img
                  src={featuredProject.screenshots[1].src}
                  alt={featuredProject.screenshots[1].alt}
                  className="showcase-shot showcase-shot--detail"
                />
              </div>
            ) : (
              <div className={`project-preview project-preview--${featuredProject.preview}`}>
                <div className="preview-window">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="preview-scan" />
                <div className="preview-panel preview-panel--main" />
                <div className="preview-panel preview-panel--side" />
              </div>
            )}

            <div className="featured-project__content">
              <p className="project-card__type">Featured Project</p>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.desc}</p>
              <strong>{featuredProject.outcome}</strong>
              <div className="project-card__stack">
                {featuredProject.stack.map((tech, j) => (
                  <span key={j} className="pstack-tag">{tech}</span>
                ))}
              </div>
            </div>
          </a>
        )}

        <div className="projects__grid">
          {projectList.map((project, i) => (
            <div
              key={i}
              className="project-card animate-in"
              ref={(el) => { if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el); }}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {project.image ? (
                <div className={`project-card__media project-card__media--image project-card__media--${project.preview}`}>
                  <img src={project.image} alt={project.imageAlt} />
                </div>
              ) : (
                <div className={`project-card__media project-preview project-preview--${project.preview}`}>
                  <div className="preview-window">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="preview-scan" />
                  <div className="preview-panel preview-panel--main" />
                  <div className="preview-panel preview-panel--side" />
                </div>
              )}

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
                <p className="project-card__outcome">{project.outcome}</p>
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
