import { useNavigate } from 'react-router-dom'
import './LeadershipStyle.css'

function LeadershipStyle() {
  const navigate = useNavigate()

  return (
    <div className="leadership-page">
      <nav className="roman-nav">
        <button className="nav-btn" onClick={() => navigate('/')}>DOMVS</button>
        <button className="nav-btn" onClick={() => navigate('/military')}>MILITARVM</button>
        <button className="nav-btn" onClick={() => navigate('/technical')}>TECHNVM</button>
        <button className="nav-btn" onClick={() => navigate('/contact')}>CONTACTVS</button>
      </nav>

      <div className="roman-container">
        <div className="leadership-header">
          <div className="laurel-crown">
            <div className="laurel-left"></div>
            <div className="spqr-emblem">SPQR</div>
            <div className="laurel-right"></div>
          </div>
          <h1 className="roman-title">LEADERSHIP PHILOSOPHY</h1>
          <div className="latin-motto">VIRTUS • DISCIPLINA • SAPIENTIA</div>
        </div>

        <div className="senate-pillars">
          <div className="pillar-section">
            <div className="pillar-header">
              <h2>STRATEGIC VISION</h2>
              <div className="roman-numeral">I</div>
            </div>
            <div className="pillar-content">
              <p>
                Like the great Roman strategists, leadership begins with vision that extends beyond the immediate battlefield. 
                I believe in establishing clear, ambitious goals that inspire teams to achieve excellence while maintaining 
                strategic flexibility to adapt to changing conditions.
              </p>
              <div className="pillar-quote">
                <em>"A leader is one who sees the path forward when others see only obstacles."</em>
              </div>
            </div>
          </div>

          <div className="pillar-section">
            <div className="pillar-header">
              <h2>MERITOCRATIC CULTURE</h2>
              <div className="roman-numeral">II</div>
            </div>
            <div className="pillar-content">
              <p>
                The Roman Senate succeeded through merit-based advancement and collective wisdom. 
                I foster environments where talent rises based on contribution, innovation, and leadership potential, 
                not politics or tenure. Every voice matters in the pursuit of excellence.
              </p>
              <div className="pillar-quote">
                <em>"True authority comes from competence, not title."</em>
              </div>
            </div>
          </div>

          <div className="pillar-section">
            <div className="pillar-header">
              <h2>DISCIPLINED EXECUTION</h2>
              <div className="roman-numeral">III</div>
            </div>
            <div className="pillar-content">
              <p>
                Roman legions conquered through discipline and systematic execution of strategy. 
                I combine military-learned precision with agile methodologies to ensure teams deliver 
                exceptional results consistently while maintaining high morale and engagement.
              </p>
              <div className="pillar-quote">
                <em>"Excellence is not an act, but a habit formed through disciplined practice."</em>
              </div>
            </div>
          </div>
        </div>

        <div className="leadership-principles">
          <h2 className="principles-title">CORE LEADERSHIP PRINCIPLES</h2>
          <div className="principles-grid">
            <div className="principle-card">
              <div className="principle-icon">⚔️</div>
              <h3>LEAD FROM THE FRONT</h3>
              <p>Never ask your team to do something you wouldn't do yourself. Set the standard through personal example and shared sacrifice.</p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">🏛️</div>
              <h3>BUILD INSTITUTIONS</h3>
              <p>Create systems and processes that outlast individual leadership. Build enduring capability, not dependency.</p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">🎯</div>
              <h3>CLARITY OF PURPOSE</h3>
              <p>Ensure every team member understands not just what to do, but why it matters and how it connects to larger goals.</p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">⚖️</div>
              <h3>DECISIVE JUDGMENT</h3>
              <p>Make timely decisions with incomplete information. Gather input widely, but take responsibility for outcomes.</p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">🛡️</div>
              <h3>PROTECT YOUR PEOPLE</h3>
              <p>Shield your team from unnecessary bureaucracy while ensuring they have resources to succeed and grow.</p>
            </div>
            
            <div className="principle-card">
              <div className="principle-icon">📈</div>
              <h3>CONTINUOUS IMPROVEMENT</h3>
              <p>Learn from both victories and defeats. Adapt strategies based on results and changing conditions.</p>
            </div>
          </div>
        </div>

        <div className="senate-wisdom">
          <h2>LEADERSHIP IN ACTION</h2>
          <div className="wisdom-sections">
            <div className="wisdom-item">
              <h3>TEAM DEVELOPMENT</h3>
              <p>
                Like Roman mentorship traditions, I invest deeply in developing future leaders. 
                Through coaching, stretch assignments, and progressive responsibility, 
                I help team members discover and develop their leadership potential.
              </p>
            </div>
            
            <div className="wisdom-item">
              <h3>CROSS-FUNCTIONAL COLLABORATION</h3>
              <p>
                The Roman Empire succeeded through diverse alliances and integrated strategies. 
                I excel at building bridges between engineering, product, business, and executive stakeholders 
                to achieve unified objectives.
              </p>
            </div>
            
            <div className="wisdom-item">
              <h3>CRISIS LEADERSHIP</h3>
              <p>
                When challenges arise, I draw on military experience to maintain calm, assess situations rapidly, 
                and mobilize teams toward solutions. Crisis reveals character and strengthens organizational resilience.
              </p>
            </div>
          </div>
        </div>

        <div className="roman-quote">
          <blockquote>
            "The art of leadership is saying no, not saying yes. It is very easy to say yes."
          </blockquote>
          <cite>— Adapted from Marcus Aurelius</cite>
        </div>

        <div className="back-to-home-container">
          <button className="back-to-home-btn" onClick={() => navigate('/')}>
            <span className="back-icon">🏛️</span>
            <span className="back-text">RETURN TO REPUBLIC</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LeadershipStyle