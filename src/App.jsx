import { useState } from 'react'
import './App.css'
import headshot from './assets/headshot.jpg'
import nagi from './assets/projects/nagi.png'
import healthedgeDemo from './assets/projects/healthedge-demo.gif'
import momrequest from './assets/workshop/momrequest.mp4'
import bathroomextendor from './assets/workshop/bathroomextendor.mp4'
import slowpoke from './assets/workshop/slowpoke.mp4'
import catan from './assets/workshop/catan.mp4'

const workshop = [
  {
    title: 'Mom Designs, Son Prints',
    desc: 'The kickoff of a new series — Mom comes up with the idea, I design it in Autodesk Fusion, and print the final piece. The format that started it all.',
    video: momrequest,
    tiktok: 'https://www.tiktok.com/@gundumwilliam/video/7601756400754183454',
    credit: {
      label: 'Designed by me 😎',
      url: null,
    },
  },
  {
    title: 'Slowpoke Soap Dish Drain',
    desc: 'A Pokémon-themed soap dish drain for the kitchen sink — equal parts functional and silly.',
    video: slowpoke,
    tiktok: 'https://www.tiktok.com/@gundumwilliam/video/7599144751937490189',
    credit: {
      label: '@SD_cat on MakerWorld',
      url: 'https://makerworld.com/en/models/1943603-slowpoke-soap-dish-drain-box?from=search#profileId-2087852',
    },
  },
  {
    title: 'Bathroom Storage Bracket',
    desc: 'Mom wanted extra storage in the bathroom. I designed the bracket from scratch in Autodesk, ran fitment tests, and printed the final version.',
    video: bathroomextendor,
    tiktok: 'https://www.tiktok.com/@gundumwilliam/video/7596563999890754829',
    credit: {
      label: 'Designed by me 😎',
      url: null,
    },
  },
  {
    title: 'Catan — 3D Printed Board',
    desc: 'A full 3D-printed Settlers of Catan board. Took 10 days of print time on and off. Highest hex count I\'ve attempted to date.',
    video: catan,
    tiktok: 'https://www.tiktok.com/@gundumwilliam/video/7596561130424732942',
    credit: {
      label: 'ReinusWeinus on MakerWorld',
      url: 'https://makerworld.com/en/models/573919-the-settlers-of-catan-3d-board-improved?from=search#profileId-2225407',
    },
  },
]

const projects = [
  {
    title: 'KotobaVault',
    desc: 'An AI-powered language acquisition system that connects immersion, spaced repetition, and personal knowledge graphs — turning every word you encounter into a traceable node, not just a flashcard. The long-term goal: a browser extension that surfaces "you\'ve seen this word 3 times before" in real time as you read or watch content.',
    tags: ['Claude API', 'Obsidian', 'Anki'],
    link: 'https://github.com/gwilliamleung/kotoba-vault',
    image: null,
    caption: null,
    status: 'in-progress',
  },
  {
    title: 'Obsidian Daily Brief Agent',
    desc: 'A personal daily-brief agent built on Claude API that runs every morning inside Obsidian. It pulls live data from the Oura Ring API (sleep score, readiness, activity), open-meteo for weather, and cross-references a structured priority list and Google Calendar. It then processes the previous day\'s journal entry — tagging people, tracking project progress, estimating macros from food mentions — and writes a formatted, collapsible daily brief directly into the vault.',
    tags: ['Claude API', 'Oura API', 'Obsidian', 'JavaScript'],
    link: 'https://github.com/gwilliamleung/obsidian-daily-brief',
    image: null,
    caption: null,
  },
  {
    title: 'Discord Character Accountability Agent',
    desc: 'A multi-character Discord accountability system that posts daily health and productivity check-ins in-character as custom personas. Each character owns a specific metric: sleep, movement, tasks, creative output, and nutrition. Posts are generated from the same daily brief data pipeline and delivered via Discord webhooks, with each character reacting to the data in their own distinct voice.',
    tags: ['Claude API', 'Discord Webhooks', 'Obsidian', 'JavaScript'],
    link: 'https://github.com/gwilliamleung/discord-character-agent',
    image: nagi,
    caption: 'Live Discord output — this Nagi (Blue Lock) post is generated from real-time Oura Ring API sleep data piped through the daily brief.',
  },
  {
    title: 'HealthEdge Workflow Automation',
    desc: 'A React-based healthcare administrative tool built to eliminate repetitive data entry for Care Management Coordinators. The core insight: the same patient information gets typed 4–5 times across different fields daily. HealthEdge lets staff enter data once and automatically propagates it to every relevant location — including auto-populated date ranges and pre-filled note sections — saving an estimated 45–60 minutes per shift.',
    tags: ['React', 'JavaScript', 'Workflow Automation'],
    link: 'https://github.com/gwilliamleung/healthcare-mock-up',
    slides: 'https://docs.google.com/presentation/d/1gWXGxL3_MND8lfNFb6OixRRRCW-HoUvoryA1vvqaeyM/edit?usp=sharing',
    image: healthedgeDemo,
    caption: 'Live demo — entering patient data once and watching it auto-propagate across all relevant fields.',
  },
  {
    title: 'Chat Translate',
    desc: 'An early exploration of using LLMs for interactive language learning. A chat interface that lets users converse with an AI tutor to practice target languages in real time — functioning as a first-principles experiment in what AI-assisted language study could look like before the space got crowded.',
    tags: ['AI / LLM', 'React', 'JavaScript'],
    link: 'https://github.com/gwilliamleung/chat',
    image: null,
    caption: null,
  },
]

export default function App() {
  const [page, setPageRaw] = useState('home')
  const setPage = (next) => {
    setPageRaw(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const [activeWorkshop, setActiveWorkshop] = useState(0)
  const [openDemos, setOpenDemos] = useState(new Set())
  const toggleDemo = (title) => {
    setOpenDemos((s) => {
      const next = new Set(s)
      next.has(title) ? next.delete(title) : next.add(title)
      return next
    })
  }
  const featured = workshop[activeWorkshop]
  const prevIdx = (activeWorkshop - 1 + workshop.length) % workshop.length
  const nextIdx = (activeWorkshop + 1) % workshop.length
  const goPrev = () => setActiveWorkshop(prevIdx)
  const goNext = () => setActiveWorkshop(nextIdx)

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <span className="nav-name" onClick={() => setPage('home')} style={{ cursor: 'pointer' }}>William Leung</span>
          <div className="nav-links">
            <a onClick={() => setPage('home')} className={page === 'home' ? 'active' : ''}>Home</a>
            <a onClick={() => setPage('about')} className={page === 'about' ? 'active' : ''}>About</a>
            <a onClick={() => setPage('projects')} className={page === 'projects' ? 'active' : ''}>Projects</a>
            <a onClick={() => setPage('workshop')} className={page === 'workshop' ? 'active' : ''}>Workshop</a>
          </div>
        </div>
      </nav>

      <div className="page">

        {/* HOME */}
        {page === 'home' && (
        <section id="home" className="home-section">
          <div className="home-text">
            <p className="home-eyebrow">Based in Brooklyn, NY</p>
            <h1 className="home-name">William Leung</h1>
            <p className="home-tagline">
              Builder at the intersection of AI and useful software. I make things that automate the annoying parts of life.
            </p>
            <div className="home-links">
              <a className="btn btn-filled" onClick={() => setPage('projects')} style={{ cursor: 'pointer' }}>View Projects</a>
              <a className="btn" href="https://github.com/gwilliamleung" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
          <img src={headshot} alt="William Leung" className="home-photo" />
        </section>
        )}

        {/* ABOUT */}
        {page === 'about' && (
        <section id="about" className="page-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-body">
            <p>
              Growing up, I was always picking something hard to learn — Legos turned into Gundams, Gundams turned into Japanese, and somewhere along the way I realized I just like the process of figuring things out. Everything looks like a problem to solve once you start seeing it that way.
            </p>
            <p>
              That's what coding became for me. Once I understood I could just build whatever I needed, I started automating the things that annoyed me — and with AI, the ceiling on what I could ship alone got a lot higher. I bought a 3D printer for the same reason: if I can design it in Autodesk, I can make it exist. Most of what's in the Workshop started as something I needed that didn't exist yet.
            </p>
            <p>
              I'll be pursuing my Master's degree at NYU, and drawing on my experience in healthcare, I want to keep building software and ML systems that integrate into real workflows and actually solve problems.
            </p>

            <h3 className="about-subhead">Research Interests</h3>
            <ul className="about-interests">
              <li><strong>Language learning & acquisition</strong> — building systems that turn immersion into structured, traceable knowledge</li>
              <li><strong>Machine learning systems</strong> — applying ML to real workflows, not just benchmarks</li>
              <li><strong>3D printing & digital fabrication</strong> — designing and manufacturing solutions to physical problems</li>
              <li><strong>Content creation</strong> — documenting the build process and making technical work accessible</li>
            </ul>

            <h3 className="about-subhead">Skills</h3>
            <ul className="about-skills">
              <li><strong>Languages:</strong> JavaScript, TypeScript, Python, SQL, HTML/CSS</li>
              <li><strong>Frontend:</strong> React, Vite, modern CSS, Chrome Extension APIs</li>
              <li><strong>AI / LLM:</strong> Claude API, prompt engineering, agentic workflows, multi-agent orchestration, DeepSeek, Midjourney</li>
              <li><strong>Data & Cloud:</strong> PostgreSQL, AWS, Google Cloud Platform, Tableau</li>
              <li><strong>Healthcare Systems:</strong> EHR workflow design, Care Management tooling</li>
              <li><strong>Tools:</strong> Obsidian, Discord Webhooks, Git, REST APIs, Autodesk Fusion</li>
            </ul>

            <h3 className="about-subhead">Contact</h3>
            <p>
              The fastest way to reach me is through <a href="https://github.com/gwilliamleung" target="_blank" rel="noreferrer">GitHub</a> or <a href="https://www.linkedin.com/in/gwilliamleung/" target="_blank" rel="noreferrer">LinkedIn</a>.
            </p>

            <p className="about-resume-placeholder">
              <a className="btn" href="/william-leung-resume.pdf" target="_blank" rel="noreferrer">
                View Resume (PDF) ↗
              </a>
            </p>
          </div>
        </section>
        )}

        {/* PROJECTS */}
        {page === 'projects' && (
        <section id="projects" className="page-section">
          <h2 className="section-title">Selected Work</h2>
          <div className="status-key">
            <span className="status-dot status-in-progress" /> In Progress
            <span className="status-dot status-shipped" /> Shipped
          </div>
          <div className="projects-grid">
            {projects.map((p) => (
              <div className={`project-card ${p.status === 'in-progress' ? 'project-in-progress' : ''}`} key={p.title}>
                <div className="project-top">
                  <div className="project-title-group">
                    <span className={`status-dot ${p.status === 'in-progress' ? 'status-in-progress' : 'status-shipped'}`} />
                    {p.link ? (
                      <a className="project-title project-title-link" href={p.link} target="_blank" rel="noreferrer">
                        {p.title}
                      </a>
                    ) : (
                      <span className="project-title">{p.title}</span>
                    )}
                    <div className="tags tags-inline">
                      {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-actions">
                  {p.image && (
                    <button
                      className="project-demo-toggle"
                      onClick={() => toggleDemo(p.title)}
                      aria-expanded={openDemos.has(p.title)}
                    >
                      <span>{openDemos.has(p.title) ? 'Hide Demo' : 'View Demo'}</span>
                      <span className="project-demo-chevron">{openDemos.has(p.title) ? '▲' : '▼'}</span>
                    </button>
                  )}
                  {p.link ? (
                    <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="project-link" style={{ opacity: 0.4 }}>Private</span>
                  )}
                  {p.slides && (
                    <a className="project-link" href={p.slides} target="_blank" rel="noreferrer">
                      Presentation ↗
                    </a>
                  )}
                </div>
                {p.image && openDemos.has(p.title) && (
                  <figure className="project-figure">
                    <img src={p.image} alt={p.title} className="project-image" />
                    {p.caption && <figcaption className="project-caption"><em>{p.caption}</em></figcaption>}
                  </figure>
                )}
              </div>
            ))}
          </div>
        </section>
        )}

        {/* WORKSHOP */}
        {page === 'workshop' && (
        <section id="workshop" className="page-section">
          <h2 className="section-title">The Workshop</h2>

          <div className="workshop-info workshop-info-top">
            <h3 className="workshop-featured-title">{featured.title}</h3>
          </div>

          <div className="workshop-carousel">
            <button className="workshop-arrow workshop-arrow-left" onClick={goPrev} aria-label="Previous video">
              ‹
            </button>
            <div className="workshop-track">
              <div className="workshop-peek workshop-peek-left" onClick={goPrev} role="button" aria-label="Previous video">
                <video src={workshop[prevIdx].video} muted playsInline preload="metadata" />
              </div>
              <div className="workshop-center">
                <video
                  key={featured.video}
                  className="workshop-center-video"
                  src={featured.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
              <div className="workshop-peek workshop-peek-right" onClick={goNext} role="button" aria-label="Next video">
                <video src={workshop[nextIdx].video} muted playsInline preload="metadata" />
              </div>
            </div>
            <button className="workshop-arrow workshop-arrow-right" onClick={goNext} aria-label="Next video">
              ›
            </button>
          </div>

          <div className="workshop-dots">
            {workshop.map((_, i) => (
              <button
                key={i}
                className={`workshop-dot ${i === activeWorkshop ? 'workshop-dot-active' : ''}`}
                onClick={() => setActiveWorkshop(i)}
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>

          <div className="workshop-info">
            <p className="workshop-featured-desc">{featured.desc}</p>
            <div className="workshop-info-links">
              {featured.tiktok && (
                <a className="workshop-tiktok-link" href={featured.tiktok} target="_blank" rel="noreferrer">
                  Watch on TikTok ↗
                </a>
              )}
              {featured.credit && (
                <p className="workshop-credit">
                  Credit: {featured.credit.url ? (
                    <a href={featured.credit.url} target="_blank" rel="noreferrer">{featured.credit.label}</a>
                  ) : (
                    <span>{featured.credit.label}</span>
                  )}
                </p>
              )}
            </div>
          </div>
        </section>
        )}

      </div>

      <footer>
        <p className="footer-name">William Leung</p>
        <div className="footer-socials">
          <a href="https://github.com/gwilliamleung" target="_blank" rel="noreferrer" aria-label="GitHub">
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg" width="28" height="28" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/gwilliamleung/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg" width="28" height="28" alt="LinkedIn" />
          </a>
          <a href="https://www.tiktok.com/@gundumwilliam" target="_blank" rel="noreferrer" aria-label="TikTok">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{opacity: 0.7, transition: 'opacity 0.15s'}}>
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.94a8.17 8.17 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z"/>
            </svg>
          </a>
        </div>
      </footer>
    </>
  )
}
