import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './MilitaryService.css'

function MilitaryService() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="military-page">
      <nav className="military-nav">
        <button className="nav-btn" onClick={() => navigate('/')}>
          Home
        </button>
        <button className="nav-btn" onClick={() => navigate('/contact')}>
          Contact
        </button>
      </nav>

      <div className="military-container">
        <div className="military-header">
          <div className="rank-insignia">
            <img src="/ssgt.png" alt="Staff Sergeant Insignia" className="header-logo" />
          </div>
          <h1 className="military-title">MILITARY SERVICE</h1>
          <div className="service-years">2001 - 2010</div>
        </div>

        <div className="service-overview">
          <div className="service-box">
            <div className="corner-screws">
              <div className="screw screw-top-left"></div>
              <div className="screw screw-top-right"></div>
              <div className="screw screw-bottom-left"></div>
              <div className="screw screw-bottom-right"></div>
            </div>
            <div className="service-title-container">
              <img src="/aflogonoword.png" alt="Air Force Logo" className="service-title-logo" />
              <h2>UNITED STATES AIR FORCE</h2>
              <img src="/aflogonoword.png" alt="Air Force Logo" className="service-title-logo" />
            </div>
            
            <div className="military-logos">
              <img src="/Seal_of_the_United_States_Department_of_the_Air_Force.svg.png" alt="Department of the Air Force Seal" className="unit-logo" />
              <img src="/US-AirNationalGuard-2007Emblem.svg.png" alt="Air National Guard" className="unit-logo" />
              <img src="/AMC_logo.avif" alt="Air Mobility Command" className="unit-logo" />
              <img src="/Air_Education_and_Training_Command.png" alt="AETC" className="unit-logo" />
              <img src="/107th_Air_Refueling_Wing.png" alt="107th Air Refueling Wing" className="unit-logo" />
              <img src="/136ars.png" alt="136th Air Refueling Squadron" className="unit-logo" />
              <img src="/384.png" alt="384th Unit" className="unit-logo" />
              <img src="/Boom_logo.png" alt="Boom Operator" className="unit-logo" />
            </div>

            <div className="service-dossier">
              <div className="dossier-header">
                <span className="dossier-classification">CLASSIFIED</span>
                <span className="dossier-number">PERS-001A</span>
              </div>
              
              <div className="dossier-content">
                <div className="dossier-field">
                  <span className="field-label">NAME:</span>
                  <span className="field-value">BOILLOT, CODY J.</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">RANK:</span>
                  <span className="field-value">STAFF SERGEANT (E-5)</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">AFSC:</span>
                  <span className="field-value">1A051 - IN-FLIGHT REFUELING SPECIALIST</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">SERVICE DATES:</span>
                  <span className="field-value">2001 - 2010</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">FLIGHT HOURS:</span>
                  <span className="field-value">2,500+ (MAJORITY COMBAT OPERATIONS)</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">OPERATIONAL THEATERS:</span>
                  <span className="field-value">40+ NATIONS WORLDWIDE</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">SECURITY CLEARANCE:</span>
                  <span className="field-value">TOP SECRET - SCI</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">STATUS:</span>
                  <span className="field-value">HONORABLE DISCHARGE</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">CAMPAIGNS:</span>
                  <span className="field-value">OPERATION ENDURING FREEDOM, OPERATION IRAQI FREEDOM, OPERATION KATRINA RELIEF, START TREATY LIAISON, SPECIAL FORCES JSOC MISSIONS</span>
                </div>
                
                <div className="dossier-field">
                  <span className="field-label">CORE VALUES:</span>
                  <span className="field-value">INTEGRITY FIRST, SERVICE BEFORE SELF, AND EXCELLENCE IN ALL WE DO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="awards-section">
          <div className="corner-screws">
            <div className="screw screw-top-left"></div>
            <div className="screw screw-top-right"></div>
            <div className="screw screw-bottom-left"></div>
            <div className="screw screw-bottom-right"></div>
          </div>
          <h3>HONORS & AWARDS</h3>
          <div className="awards-grid">
            <div className="award-item">
              <img src="/ribbon_AirMedal.png" alt="Air Medal Ribbon" className="ribbon-image" />
              <span className="award-text">Air Medal with 2 Bronze Oak Leaf Clusters</span>
            </div>
            <div className="award-item">
              <img src="/Ribbon_AAM.png" alt="Aerial Achievement Medal Ribbon" className="ribbon-image" />
              <span className="award-text">Aerial Achievement Medal</span>
            </div>
            <div className="award-item">
              <img src="/Ribbon_NationalDefenseService.png" alt="National Defense Service Medal Ribbon" className="ribbon-image" />
              <span className="award-text">National Defense Service Medal</span>
            </div>
            <div className="award-item">
              <img src="/Ribbon_AESM.jpeg" alt="Air Force Expeditionary Service Medal Ribbon" className="ribbon-image" />
              <span className="award-text">Air Force Expeditionary Service Medal</span>
            </div>
            <div className="award-item">
              <img src="/Ribbon_AF_training.jpeg" alt="Air Force Training Ribbon" className="ribbon-image" />
              <span className="award-text">Air Force Training Ribbon</span>
            </div>
            <div className="award-item">
              <img src="/USAAF_Aircrew_Badge.png" alt="Aircrew Wings" className="ribbon-image wings-image" />
              <span className="award-text">Aircrew Wings</span>
            </div>
          </div>
        </div>

        <div className="mission-sections">
          <div className="mission-box">
            <div className="corner-screws">
              <div className="screw screw-top-left"></div>
              <div className="screw screw-top-right"></div>
              <div className="screw screw-bottom-left"></div>
              <div className="screw screw-bottom-right"></div>
            </div>
            <h3>IN-FLIGHT REFUELING OPERATIONS</h3>
            <p>
              Served as 1A051 In-Flight Refueling Specialist with over 2,500 flight hours conducting aerial refueling missions. 
              Operated boom controls to safely connect tanker and receiver aircraft, directed receiver positioning, 
              and monitored refueling systems during critical combat and training operations worldwide.
            </p>
          </div>

          <div className="mission-box">
            <div className="corner-screws">
              <div className="screw screw-top-left"></div>
              <div className="screw screw-top-right"></div>
              <div className="screw screw-bottom-left"></div>
              <div className="screw screw-bottom-right"></div>
            </div>
            <h3>CARGO & PASSENGER OPERATIONS</h3>
            <p>
              Supervised cargo and passenger loading operations across 40+ countries. Computed aircraft weight and balance, 
              accomplished load planning, and ensured proper cargo restraint according to safety criteria. 
              Conducted passenger briefings on emergency procedures and supervised in-flight passenger safety.
            </p>
          </div>

          <div className="mission-box">
            <div className="corner-screws">
              <div className="screw screw-top-left"></div>
              <div className="screw screw-top-right"></div>
              <div className="screw screw-bottom-left"></div>
              <div className="screw screw-bottom-right"></div>
            </div>
            <h3>SYSTEMS EXPERTISE & SAFETY</h3>
            <p>
              Performed comprehensive inspections and troubleshooting of in-flight refueling systems and equipment. 
              Executed emergency procedures for fuel off-load/on-load operations and maintained zero safety incidents. 
              Demonstrated technical mastery of complex aerial refueling controls and safety protocols.
            </p>
          </div>
        </div>

        <div className="core-values-section">
          <div className="corner-screws">
            <div className="screw screw-top-left"></div>
            <div className="screw screw-top-right"></div>
            <div className="screw screw-bottom-left"></div>
            <div className="screw screw-bottom-right"></div>
          </div>
          <h3>Air Force Core Values</h3>
          
          <div className="core-values-content">
            <p><strong>Integrity First:</strong> This value emphasizes honesty, moral courage, and doing what is right, even when no one is looking. It forms the basis of trust within the Air Force and is essential for maintaining the integrity of the profession of arms.</p>
            
            <p><strong>Service Before Self:</strong> This value highlights the commitment of Air Force personnel to put the needs of the unit, the mission, and the nation above personal desires and goals. It emphasizes dedication, discipline, and respect for authority.</p>
            
            <p><strong>Excellence in All We Do:</strong> This value signifies the pursuit of continuous improvement and the highest standards of performance in all aspects of Air Force operations and individual conduct. It is a moral obligation for Airmen to strive for excellence, as the mission often involves the risk of human life.</p>
          </div>
        </div>

        <div className="military-quote">
          <blockquote>
            "Operating the boom on aerial refueling missions taught me precision under pressure. When you're connecting aircraft at 20,000 feet under threat of enemy fire, there's no room for error. Every decision affects mission success and aircrew safety. That level of responsibility shaped my approach to leadership and technical excellence."
          </blockquote>
          <cite>— Cody J. Boillot - Former SSgt., U.S. Air Force</cite>
        </div>

        <div className="back-to-home-container">
          <button className="back-to-home-btn" onClick={() => navigate('/')}>
            <span className="back-icon">⬅</span>
            <span className="back-text">RETURN TO BASE</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default MilitaryService