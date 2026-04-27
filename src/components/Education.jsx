import React from 'react';
import { education } from '../data/portfolio';
import './Education.css';

const Education = () => (
  <section id="education" className="education">
    <div className="section-inner">
      <p className="section-label">04 — Journey</p>
      <h2 className="section-title">Education</h2>

      <div className="timeline">
        {education.map((item, i) => (
          <div key={i} className="timeline__item">
            <p className="timeline__date">{item.period}</p>
            <h3 className="timeline__title">{item.degree}</h3>
            <p className="timeline__org">{item.org}</p>
            <p className="timeline__desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
