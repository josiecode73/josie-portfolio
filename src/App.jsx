import { useState, useRef, useEffect, useCallback, createContext, useContext } from 'react'
import { PROJECTS_DATA, FILTERS, UI } from './i18n'
import './App.css'

export const LangContext = createContext('zh')

function useTypewriter(text, speed = 58, delay = 300) {
  const [out, setOut] = useState('')
  const [done, setDone] = useState(false)
  useEffect(() => {
    setOut('')
    setDone(false)
    let i = 0
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        i++
        setOut(text.slice(0, i))
        if (i >= text.length) { clearInterval(iv); setDone(true) }
      }, speed)
      return () => clearInterval(iv)
    }, delay)
    return () => clearTimeout(t)
  }, [text, speed, delay])
  return { out, done }
}

function useDragScroll() {
  const ref = useRef(null)
  const dragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const moved = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onDown = (e) => {
      dragging.current = true; moved.current = false
      startX.current = e.pageX - el.offsetLeft
      scrollLeft.current = el.scrollLeft
      el.style.cursor = 'grabbing'; el.style.userSelect = 'none'
    }
    const onUp = () => { dragging.current = false; el.style.cursor = 'grab'; el.style.userSelect = '' }
    const onMove = (e) => {
      if (!dragging.current) return
      e.preventDefault()
      const x = e.pageX - el.offsetLeft - startX.current
      if (Math.abs(x) > 4) moved.current = true
      el.scrollLeft = scrollLeft.current - x
    }
    el.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onUp)
    return () => {
      el.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onUp)
    }
  }, [])
  return { ref, moved, preventClickIfDragged: (e) => { if (moved.current) e.preventDefault() } }
}

function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setVisible(true) }, { threshold: 0.08 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

function ParticleCanvas() {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particles = useRef([])
  const mouse = useRef({ x: -9999, y: -9999 })

  const init = useCallback((w, h) => {
    const count = Math.min(Math.floor(w * h / 14000), 70)
    particles.current = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.8 + 0.8,
    }))
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
      init(canvas.offsetWidth, canvas.offsetHeight)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      const src = 'touches' in e ? e.touches[0] : e
      mouse.current = { x: src.clientX - rect.left, y: src.clientY - rect.top }
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('touchmove', onMove, { passive: true })
    const CONN = 110, MOUSE = 140
    const draw = () => {
      const W = canvas.offsetWidth, H = canvas.offsetHeight
      ctx.clearRect(0, 0, W, H)
      for (const p of particles.current) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        const dx = p.x - mouse.current.x, dy = p.y - mouse.current.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < MOUSE) { p.vx += dx / d * 0.04; p.vy += dy / d * 0.04 }
      }
      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const a = particles.current[i], b = particles.current[j]
          const dx = a.x - b.x, dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < CONN) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0,0,0,${(1 - d / CONN) * 0.14})`
            ctx.lineWidth = 0.8
            ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      for (const p of particles.current) {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,0,0,0.18)'; ctx.fill()
      }
      rafRef.current = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('touchmove', onMove)
    }
  }, [init])

  return <canvas ref={canvasRef} className="hero-canvas" />
}

function MiniFrame({ src, alt }) {
  return (
    <div className="mini-frame">
      <div className="mini-bar">
        <div className="mini-dots">
          <span className="mini-dot r" />
          <span className="mini-dot y" />
          <span className="mini-dot g" />
        </div>
        <div className="mini-url" />
      </div>
      <div className="mini-screen">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  )
}

function Hero() {
  const lang = useContext(LangContext)
  const h = UI[lang].hero
  const speed1 = lang === 'zh' ? 65 : 45
  const speed2 = lang === 'zh' ? 70 : 48
  const { out: t1, done: d1 } = useTypewriter(h.line1, speed1, 400)
  const { out: t2, done: d2 } = useTypewriter(h.line2, speed2, 400 + h.line1.length * speed1 + 200)
  const [showSub, setShowSub] = useState(false)
  const [showCta, setShowCta] = useState(false)

  useEffect(() => {
    setShowSub(false)
    setShowCta(false)
  }, [lang])

  useEffect(() => {
    if (!d2) return
    const a = setTimeout(() => setShowSub(true), 150)
    const b = setTimeout(() => setShowCta(true), 420)
    return () => { clearTimeout(a); clearTimeout(b) }
  }, [d2])

  const fade = (show, delay = '0s') => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}`,
  })

  return (
    <section className="hero hero--center">
      <ParticleCanvas />
      <div className="hero-center">
        <div className="hero-eyebrow">{h.eyebrow}</div>
        <h1 className="hero-title">
          <div className="hero-title-line">
            {t1}{!d1 && <span className="tw-cursor" />}
          </div>
          {d1 && (
            <div className="hero-title-line hero-title-line--em">
              {t2}{!d2 && <span className="tw-cursor" />}
            </div>
          )}
        </h1>
        <p className="hero-sub hero-sub--accent" style={fade(showSub)}>
          {h.subtitle}
        </p>
        <div className="hero-actions" style={fade(showCta, '0.08s')}>
          <a href="#projects" className="hero-cta">{h.cta1}</a>
          <a href="#contact" className="hero-cta hero-cta--ghost">{h.cta2}</a>
        </div>
      </div>
      <div className="hero-scroll-hint">{h.scroll}</div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const lang = useContext(LangContext)
  const { ref, visible } = useFadeIn()
  const overlay = UI[lang].projects.overlay
  const title = project[lang].title
  const description = project[lang].description

  return (
    <div
      ref={ref}
      className={`pcard fade-in${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${Math.min(index * 0.07, 0.45)}s` }}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="pcard-shot">
        <MiniFrame src={project.screenshot} alt={project.name} />
        <div className="pcard-shot-overlay"><span>{overlay}</span></div>
      </a>
      <div className="pcard-body">
        <div className="pcard-meta">
          <span className="pcard-num">{String(project.id).padStart(2, '0')}</span>
          <span className="pcard-badge">{project.subtitle.split(' ')[0]}</span>
        </div>
        <h3 className="pcard-title">{title}</h3>
        <div className="pcard-divider" />
        <p className="pcard-desc">{description}</p>
        <div className="pcard-tags">
          {project.tags.slice(0, 3).map(t => <span key={t} className="pcard-tag">{t}</span>)}
        </div>
      </div>
    </div>
  )
}

function ContactSection() {
  const lang = useContext(LangContext)
  const c = UI[lang].contact

  return (
    <section className="contact-section">
      <div className="contact-glow" />
      <div className="contact-center">
        <span className="contact-eyebrow">{c.eyebrow}</span>
        <h2 className="contact-title">
          {c.title[0]}<br />{c.title[1]}<br />{c.title[2]}
        </h2>
        <p className="contact-sub">{c.sub}</p>
        <a href="mailto:josiecode73@outlook.com" className="contact-cta">{c.cta}</a>
        <div className="contact-grid">
          <a href="mailto:josiecode73@outlook.com" className="contact-card">
            <div className="contact-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="contact-card-label">{c.emailLabel}</div>
            <div className="contact-card-value">josiecode73@outlook.com</div>
            <div className="contact-card-hint">{c.emailHint}</div>
          </a>
          <a href="https://github.com/josiecode73" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div className="contact-card-label">{c.githubLabel}</div>
            <div className="contact-card-value">josiecode73</div>
            <div className="contact-card-hint">{c.githubHint}</div>
          </a>
          <a href="https://line.me/R/ti/p/@176uoxez" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.065-.022.134-.032.199-.032.211 0 .391.09.51.25l2.444 3.317V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
            </div>
            <div className="contact-card-label">{c.lineLabel}</div>
            <div className="contact-card-value">@176uoxez</div>
            <div className="contact-card-hint">{c.lineHint}</div>
            <img src="/line-qr.png" alt="LINE QR Code" className="contact-qr" />
          </a>
        </div>
      </div>
    </section>
  )
}

function LangToggle({ lang, onToggle }) {
  return (
    <button className="lang-toggle" onClick={onToggle} aria-label="Switch language">
      <span className={lang === 'zh' ? 'lang-active' : 'lang-inactive'}>中</span>
      <span className="lang-sep">/</span>
      <span className={lang === 'en' ? 'lang-active' : 'lang-inactive'}>EN</span>
    </button>
  )
}

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('jc-lang') || 'zh')
  const [filter, setFilter] = useState('All')
  const { ref: filterRef, moved } = useDragScroll()
  const filtered = filter === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.subtitle === filter)
  const nav = UI[lang].nav

  const toggleLang = () => {
    const next = lang === 'zh' ? 'en' : 'zh'
    setLang(next)
    localStorage.setItem('jc-lang', next)
  }

  return (
    <LangContext.Provider value={lang}>
      <nav className="nav">
        <span className="nav-logo">JC. Portfolio</span>
        <div className="nav-right">
          <a href="#projects" className="nav-btn nav-btn--outline">{nav.portfolio}</a>
          <a href="#contact" className="nav-btn nav-btn--fill">{nav.contact}</a>
          <LangToggle lang={lang} onToggle={toggleLang} />
        </div>
      </nav>
      <Hero />
      <section className="projects-section" id="projects">
        <div className="filter-bar" ref={filterRef}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-item${filter === f ? ' active' : ''}`}
              onClick={(e) => { if (moved.current) { e.preventDefault(); return } setFilter(f) }}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="cards-grid">
          {filtered.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
          {filtered.length === 0 && <p className="empty-msg">{UI[lang].projects.empty}</p>}
        </div>
      </section>
      <div id="contact">
        <ContactSection />
      </div>
      <footer className="footer">
        <span style={{ color: '#555552', fontSize: 12 }}>{UI[lang].footer}</span>
      </footer>
    </LangContext.Provider>
  )
}

export default App
