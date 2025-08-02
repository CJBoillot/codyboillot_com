import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import * as d3 from 'd3'

function Home() {
  const discChartRef = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    if (discChartRef.current) {
      createEnhancedDiscChart()
    }
  }, [])

  const createEnhancedDiscChart = () => {
    const container = d3.select(discChartRef.current)
    container.selectAll("*").remove()

    const width = 300
    const height = 300
    const radius = Math.min(width, height) / 2 - 40

    const svg = container
      .append("svg")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet")

    const g = svg.append("g")
      .attr("transform", `translate(${width/2}, ${height/2})`)

    const data = [
      { trait: "Dominance", value: 85, color: "#ef4444" },
      { trait: "Influence", value: 90, color: "#f59e0b" },
      { trait: "Steadiness", value: 30, color: "#64748b" },
      { trait: "Conscientiousness", value: 25, color: "#64748b" }
    ]

    const angleScale = d3.scaleLinear()
      .domain([0, data.length])
      .range([0, 2 * Math.PI])

    const radiusScale = d3.scaleLinear()
      .domain([0, 100])
      .range([0, radius])

    // Grid circles
    const gridLevels = [20, 40, 60, 80, 100]
    g.selectAll(".grid-circle")
      .data(gridLevels)
      .enter()
      .append("circle")
      .attr("class", "grid-circle")
      .attr("r", d => radiusScale(d))
      .attr("fill", "none")
      .attr("stroke", "rgba(255,255,255,0.1)")
      .attr("stroke-width", 1)

    // Animated radar chart
    const line = d3.lineRadial()
      .angle((d, i) => angleScale(i))
      .radius(d => radiusScale(d.value))
      .curve(d3.curveCardinalClosed)

    const path = g.append("path")
      .datum(data)
      .attr("fill", "rgba(245, 158, 11, 0.3)")
      .attr("stroke", "#f59e0b")
      .attr("stroke-width", 3)
      .attr("d", line)

    // Animate the path
    const totalLength = path.node().getTotalLength()
    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0)

    // Data points
    g.selectAll(".data-point")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "data-point")
      .attr("cx", (d, i) => radiusScale(d.value) * Math.cos(angleScale(i) - Math.PI/2))
      .attr("cy", (d, i) => radiusScale(d.value) * Math.sin(angleScale(i) - Math.PI/2))
      .attr("r", 0)
      .attr("fill", d => d.color)
      .transition()
      .duration(1000)
      .delay((d, i) => i * 200 + 1000)
      .attr("r", 6)

    // Labels
    g.selectAll(".trait-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "trait-label")
      .attr("x", (d, i) => (radius + 20) * Math.cos(angleScale(i) - Math.PI/2))
      .attr("y", (d, i) => (radius + 20) * Math.sin(angleScale(i) - Math.PI/2))
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("fill", "#cbd5e1")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .style("opacity", 0)
      .text(d => d.trait.charAt(0))
      .transition()
      .duration(1000)
      .delay(2000)
      .style("opacity", 1)
  }

  return (
    <div className="homepage">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <div className="hero-section" id="main-content">
        <div className="hero-content">
          <div className="profile-container">
            <img 
              src="/cody1.jpeg" 
              alt="Professional headshot of Cody Boillot, MBA, CSM - Software Development Manager and Strategic Leader" 
              className="profile-image"
              loading="eager"
              decoding="async"
            />
            <div className="profile-glow"></div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Cody Boillot</span>
            </h1>
            
            <div className="hero-tagline">
              <p className="tagline-text">Building high-performing engineering teams that deliver enterprise-scale solutions</p>
            </div>
            
            <div className="subtitle-container">
              <p className="subtitle">Software Development Manager</p>
              <p className="subtitle">Strategic Tech Leader</p>
              <p className="subtitle">Team Builder & Mentor</p>
            </div>
            
            <p className="hero-description">
              Creating innovative solutions that drive business impact while leading high-performing engineering teams. 
              10+ years delivering enterprise-scale systems, achieving 90%+ retention rates, and eliminating millions 
              in waste through strategic technical leadership and data-driven workforce planning.
            </p>
            
            <div className="cta-buttons">
              <button 
                className="cta-primary" 
                onClick={() => document.getElementById('disc-section')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="View leadership experience and achievements"
              >
                View Leadership Impact
              </button>
              <button 
                className="cta-secondary"
                onClick={() => navigate('/contact')}
                aria-label="Contact for leadership opportunities"
              >
                Discuss Opportunities
              </button>
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="disc-section" id="disc-section">
        <div className="section-container">
          <h2 className="section-title">Leadership DNA</h2>
          <p className="section-subtitle">High D + High I: The Rare Combination</p>
          
          <div className="disc-content">
            <div className="disc-chart-container">
              <div className="d3-disc-chart" ref={discChartRef}></div>
              
              <div className="disc-legend">
                <div className="legend-item dominance-legend">
                  <div className="legend-color"></div>
                  <span>Dominance (High - 85%)</span>
                </div>
                <div className="legend-item influence-legend">
                  <div className="legend-color"></div>
                  <span>Influence (High - 90%)</span>
                </div>
              </div>
            </div>
            
            <div className="disc-insights">
              <div className="insight-card">
                <h3>Engineering Leadership</h3>
                <p>Rare D+I profile drives both technical excellence and team performance. 
                Only 8% of software leaders combine high results-focus with strong people influence.</p>
              </div>
              
              <div className="insight-card">
                <h3>Team Retention Excellence</h3>
                <p>Achieved 90%+ two-year retention rate by balancing competitive technical goals 
                with collaborative team culture and strategic mentorship.</p>
              </div>
              
              <div className="insight-card">
                <h3>Cross-Functional Impact</h3>
                <p>Facilitates executive stakeholder alignment through decisive technical strategy 
                and persuasive communication across engineering, product, and business teams.</p>
              </div>
            </div>
          </div>
          
          <div className="disc-quote">
            <blockquote>
              "The team was happy, engaged, and spirited... We started with a team that knew very little, 
              and now we have subject matter experts who continue to grow under Cody's leadership."
            </blockquote>
            <cite>— 2024 Performance Review</cite>
          </div>
        </div>
      </div>
      
      <div className="achievements-section" id="achievements-section">
        <div className="section-container">
          <h2 className="section-title">Technical Leadership Impact</h2>
          <p className="section-subtitle">Proven Results in Engineering Management</p>
          
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-number">40+</div>
              <h3>Engineers Hired & Developed</h3>
              <p>Built high-performing teams across AI, digital engineering, and enterprise systems with 90%+ retention beyond two years</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-number">10+</div>
              <h3>Years Tech Leadership</h3>
              <p>Progressive leadership roles from Software Engineer to Development Manager across Fortune 500 and government sectors</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-number">$M+</div>
              <h3>Enterprise Systems Delivered</h3>
              <p>Created innovations that saved companies millions by eliminating fraud, waste, abuse, and unnecessary systems while maintaining or improving performance</p>
            </div>
            
            <div className="achievement-card">
              <div className="achievement-number">MBA</div>
              <h3>Strategic Business Acumen</h3>
              <p>Combines technical expertise with business strategy. Currently pursuing Doctorate in Organizational Psychology</p>
            </div>
          </div>
          
          <div className="leadership-highlights">
            <div className="highlight-item">
              <h3>Scaling Engineering Teams</h3>
              <p>Designed Contract Associate Program reducing hiring costs while building talent pipeline of early-career engineers</p>
            </div>
            
            <div className="highlight-item">
              <h3>Data-Driven Decision Making</h3>
              <p>Integrated HRIS, project tracking, and analytics systems for workforce planning and scenario modeling</p>
            </div>
            
            <div className="highlight-item">
              <h3>Agile Product Ownership</h3>
              <p>Led cross-functional teams delivering workforce development solutions under budget and on schedule</p>
            </div>
            
            <div className="highlight-item">
              <h3>Military Leadership Foundation</h3>
              <p>Combat Sergeant & Aviator experience in high-pressure environments builds resilience and strategic thinking</p>
            </div>
          </div>
          
        </div>
      </div>
      
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-single-line">
            <div className="footer-info">
              <span className="footer-name">Cody J. Boillot, MBA, CSM</span>
              <span className="footer-separator">•</span>
              <a href="mailto:Boillot.Cody@gmail.com" className="footer-email">Boillot.Cody@gmail.com</a>
            </div>
            <div className="footer-copyright">
              <span>&copy; 2025 All rights reserved</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home