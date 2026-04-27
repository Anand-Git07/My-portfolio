import React, { useEffect, useRef } from 'react';
import { skills } from '../data/portfolio';
import './Skills.css';

const Skills = () => {
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
    <section id="skills" className="skills">
      <div className="section-inner">
        <p className="section-label">02 — Skills</p>
        <h2 className="section-title">What I Do</h2>
        <p className="section-sub">
          From pixel-perfect UIs to scalable APIs to intelligent AI systems — I build across the full spectrum.
        </p>

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <div
              key={i}
              className={`skill-card skill-card--${skill.color} animate-in`}
              ref={(el) => { if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el); }}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="skill-card__icon">{skill.icon}</div>
              <h3 className="skill-card__title">{skill.title}</h3>
              <p className="skill-card__desc">{skill.desc}</p>
              <div className="skill-card__tags">
                {skill.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
