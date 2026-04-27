import React, { useEffect, useRef } from 'react';
import { personal, stats, stack } from '../data/portfolio';
import './About.css';

const About = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => { if (el && !itemsRef.current.includes(el)) itemsRef.current.push(el); };

  return (
    <section id="about" className="about">
      <div className="section-inner">
        <p className="section-label">01 — About</p>
        <h2 className="section-title">Who I Am</h2>

        <div className="about__grid">
          {/* ── Left: Text + Stats ── */}
          <div className="about__text">
            {personal.about.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}

            <div className="about__stats">
              {stats.map((s, i) => (
                <div key={i} className="stat-card animate-in" ref={addRef}>
                  <div className="stat-card__num">{s.num}</div>
                  <div className="stat-card__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Stack bars ── */}
          <div className="about__stack">
            <p className="stack-heading">Tech Stack</p>
            <div className="stack-list">
              {stack.map((item, i) => (
                <div key={i} className="stack-item animate-in" ref={addRef}>
                  <span className="stack-item__name">{item.name}</span>
                  <div className="stack-item__bar-wrap">
                    <div className="stack-item__bar" style={{ width: `${item.pct}%` }} />
                  </div>
                  <span className="stack-item__level">{item.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
