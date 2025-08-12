import { useNavigate } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import './TechnicalLeadership.css'

function TechnicalLeadership() {
  const navigate = useNavigate()
  const particlesRef = useRef()

  useEffect(() => {
    createFloatingParticles()
  }, [])

  const createFloatingParticles = () => {
    if (!particlesRef.current) return

    const container = particlesRef.current
    const particleCount = 50

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div')
      particle.className = 'floating-particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.top = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 20 + 's'
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
      container.appendChild(particle)
    }
  }

  return (
    <div className="tech-page">
      <div className="particles-container" ref={particlesRef}></div>
      
      <nav className="sci-fi-nav">
        <div className="nav-grid">
          <button className="nav-btn" onClick={() => navigate('/')}>
            <span className="nav-icon">🏠</span>
            <span className="nav-text">HOME</span>
          </button>
          <button className="nav-btn" onClick={() => navigate('/military')}>
            <span className="nav-icon">⚔️</span>
            <span className="nav-text">MILITARY</span>
          </button>
          <button className="nav-btn" onClick={() => navigate('/leadership')}>
            <span className="nav-icon">👑</span>
            <span className="nav-text">LEADERSHIP</span>
          </button>
          <button className="nav-btn" onClick={() => navigate('/contact')}>
            <span className="nav-icon">📡</span>
            <span className="nav-text">CONTACT</span>
          </button>
        </div>
      </nav>

      <div className="tech-container">
        <div className="tech-header">
          <div className="hologram-frame">
            <div className="hologram-lines"></div>
            <h1 className="tech-title">TECHNICAL LEADERSHIP</h1>
            <div className="tech-subtitle">ENGINEERING • ARCHITECTURE • INNOVATION</div>
          </div>
        </div>

        <div className="system-panels">
          <div className="panel primary-panel">
            <div className="panel-header">
              <div className="panel-indicator"></div>
              <h2>SYSTEM ARCHITECTURE</h2>
              <div className="panel-status">ONLINE</div>
            </div>
            <div className="panel-content">
              <p>
                Designing enterprise-scale distributed systems that handle millions of transactions 
                while maintaining 99.9% uptime. Expertise spans cloud-native architectures, 
                microservices, event-driven systems, and modern data platforms.
              </p>
              <div className="tech-metrics">
                <div className="metric">
                  <span className="metric-value">99.9%</span>
                  <span className="metric-label">System Uptime</span>
                </div>
                <div className="metric">
                  <span className="metric-value">10M+</span>
                  <span className="metric-label">Daily Transactions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="panel secondary-panel">
            <div className="panel-header">
              <div className="panel-indicator"></div>
              <h2>ENGINEERING TEAMS</h2>
              <div className="panel-status">OPTIMIZED</div>
            </div>
            <div className="panel-content">
              <p>
                Building and scaling high-performance engineering organizations through data-driven 
                hiring, structured mentorship programs, and continuous learning initiatives. 
                Achieved industry-leading retention rates while accelerating delivery velocity.
              </p>
              <div className="tech-metrics">
                <div className="metric">
                  <span className="metric-value">40+</span>
                  <span className="metric-label">Engineers Hired</span>
                </div>
                <div className="metric">
                  <span className="metric-value">90%</span>
                  <span className="metric-label">Retention Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-stack-section">
          <h2 className="section-title">TECHNOLOGY MATRIX</h2>
          <div className="tech-grid">
            <div className="tech-category">
              <h3>CLOUD PLATFORMS</h3>
              <div className="tech-items">
                <span className="tech-item">AWS</span>
                <span className="tech-item">Azure</span>
                <span className="tech-item">Google Cloud</span>
                <span className="tech-item">Kubernetes</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>LANGUAGES & FRAMEWORKS</h3>
              <div className="tech-items">
                <span className="tech-item">Python</span>
                <span className="tech-item">JavaScript/Node.js</span>
                <span className="tech-item">React</span>
                <span className="tech-item">Django</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>DATA & AI</h3>
              <div className="tech-items">
                <span className="tech-item">PostgreSQL</span>
                <span className="tech-item">MongoDB</span>
                <span className="tech-item">Machine Learning</span>
                <span className="tech-item">Data Analytics</span>
              </div>
            </div>
            
            <div className="tech-category">
              <h3>ARCHITECTURE PATTERNS</h3>
              <div className="tech-items">
                <span className="tech-item">Microservices</span>
                <span className="tech-item">Event Sourcing</span>
                <span className="tech-item">CQRS</span>
                <span className="tech-item">Domain-Driven Design</span>
              </div>
            </div>
          </div>
        </div>

        <div className="innovation-section">
          <h2 className="section-title">INNOVATION PROTOCOLS</h2>
          <div className="innovation-grid">
            <div className="innovation-card">
              <div className="card-glow"></div>
              <h3>AI-POWERED WORKFORCE PLANNING</h3>
              <p>
                Developed machine learning models to predict hiring needs, skill gaps, and team 
                performance metrics. Reduced planning cycles by 60% while improving accuracy 
                of resource allocation decisions.
              </p>
              <div className="innovation-tags">
                <span className="tag">Python</span>
                <span className="tag">ML</span>
                <span className="tag">Analytics</span>
              </div>
            </div>
            
            <div className="innovation-card">
              <div className="card-glow"></div>
              <h3>ENTERPRISE INTEGRATION PLATFORM</h3>
              <p>
                Architected unified data platform connecting HR systems, project tracking, 
                and financial planning tools. Eliminated data silos and enabled real-time 
                business intelligence across organization.
              </p>
              <div className="innovation-tags">
                <span className="tag">Microservices</span>
                <span className="tag">APIs</span>
                <span className="tag">ETL</span>
              </div>
            </div>
            
            <div className="innovation-card">
              <div className="card-glow"></div>
              <h3>AUTOMATED DEPLOYMENT PIPELINES</h3>
              <p>
                Implemented CI/CD infrastructure reducing deployment time from hours to minutes. 
                Integrated automated testing, security scanning, and rollback mechanisms 
                ensuring zero-downtime releases.
              </p>
              <div className="innovation-tags">
                <span className="tag">DevOps</span>
                <span className="tag">Docker</span>
                <span className="tag">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="leadership-protocols">
          <h2 className="section-title">TECHNICAL LEADERSHIP PROTOCOLS</h2>
          <div className="protocol-grid">
            <div className="protocol-item">
              <div className="protocol-icon">⚡</div>
              <h3>RAPID PROTOTYPING</h3>
              <p>Foster innovation through quick proof-of-concept development and iterative feedback loops.</p>
            </div>
            
            <div className="protocol-item">
              <div className="protocol-icon">🔧</div>
              <h3>TECHNICAL EXCELLENCE</h3>
              <p>Maintain high code quality standards through peer review, automated testing, and continuous refactoring.</p>
            </div>
            
            <div className="protocol-item">
              <div className="protocol-icon">🛡️</div>
              <h3>SECURITY BY DESIGN</h3>
              <p>Integrate security practices into every phase of development lifecycle and architecture decisions.</p>
            </div>
            
            <div className="protocol-item">
              <div className="protocol-icon">📊</div>
              <h3>DATA-DRIVEN DECISIONS</h3>
              <p>Leverage metrics, monitoring, and analytics to guide technical strategy and resource allocation.</p>
            </div>
          </div>
        </div>

        <div className="tech-quote">
          <div className="quote-container">
            <blockquote>
              "Technology is not just about building systems—it's about enabling human potential 
              and creating solutions that transform how organizations operate and grow."
            </blockquote>
            <cite>— Technical Leadership Philosophy</cite>
          </div>
        </div>

        <div className="back-to-home-container">
          <button className="back-to-home-btn" onClick={() => navigate('/')}>
            <span className="back-icon">🚀</span>
            <span className="back-text">RETURN TO STATION</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TechnicalLeadership