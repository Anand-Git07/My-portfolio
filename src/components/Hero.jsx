import React from 'react';
import { personal } from '../data/portfolio';
import './Hero.css';

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero__grid">

      {/* ── Left: Text ── */}
      <div className="hero__left">
        <p className="hero__label fade-up d1"></p>

        <h1 className="hero__name fade-up d2">
          Hi, I'm<br />
          <span>{personal.name}</span>
        </h1>

        <p className="hero__desc fade-up d3">{personal.tagline}</p>

        <div className="hero__btns fade-up d4">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact"  className="btn-outline">Get in Touch</a>
        </div>
      </div>

      {/* ── Right: Code visual ── */}
      <div className="hero__visual">
        <div className="hero__orb orb1" />
        <div className="hero__orb orb2" />

        <div className="hero__card-wrap">
          <div className="code-block">
            <div className="code-dots" />
            <pre className="code-body">
              <span className="c-purple">const</span>{' '}
              <span className="c-cyan">developer</span>{' '}
              <span className="c-muted">=</span>{' '}
              <span className="c-yellow">{'{'}</span>{'\n'}
              {'  '}<span className="c-green">name</span>
              <span className="c-muted">:</span>{' '}
              <span className="c-yellow">"Anand Raj"</span>
              <span className="c-muted">,</span>{'\n'}
              {'  '}<span className="c-green">role</span>
              <span className="c-muted">:</span>{' '}
              <span className="c-yellow">"Full Stack + AI Dev"</span>
              <span className="c-muted">,</span>{'\n'}
              {'  '}<span className="c-green">stack</span>
              <span className="c-muted">:</span>{' '}
              <span className="c-blue">{'['}</span>{'\n'}
              {'    '}<span className="c-yellow">"React"</span>
              <span className="c-muted">, </span>
              <span className="c-yellow">"Node.js"</span>
              <span className="c-muted">,</span>{'\n'}
              {'    '}<span className="c-yellow">"Django"</span>
              <span className="c-muted">, </span>
              <span className="c-yellow">"PostgreSQL"</span>
              <span className="c-muted">,</span>{'\n'}
              {'    '}<span className="c-yellow">"Gen AI"</span>{'\n'}
              {'  '}<span className="c-blue">{']'}</span>
              <span className="c-muted">,</span>{'\n'}
              {'  '}<span className="c-green">open</span>
              <span className="c-muted">:</span>{' '}
              <span className="c-purple">true</span>{'\n'}
              <span className="c-yellow">{'}'}</span>
            </pre>
            <div className="status-bar">
              <span className="status-dot" />
              <span className="status-text">Open to opportunities</span>
            </div>
          </div>
        </div>

        <div className="float-badge badge1">⚡ Gen AI Engineer</div>
        <div className="float-badge badge2">🔥 MERN Stack Dev</div>
      </div>
    </div>
  </section>
);

export default Hero;
