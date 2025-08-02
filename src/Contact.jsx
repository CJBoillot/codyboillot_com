import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '' // Hidden field for bot detection
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  
  // Simple math CAPTCHA
  const [mathQuestion, setMathQuestion] = useState({ question: '', answer: 0 })
  const [userAnswer, setUserAnswer] = useState('')

  // Generate new math question
  const generateMathQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operation = Math.random() > 0.5 ? '+' : '-'
    
    if (operation === '+') {
      setMathQuestion({
        question: `${num1} + ${num2}`,
        answer: num1 + num2
      })
    } else {
      // Ensure positive result for subtraction
      const larger = Math.max(num1, num2)
      const smaller = Math.min(num1, num2)
      setMathQuestion({
        question: `${larger} - ${smaller}`,
        answer: larger - smaller
      })
    }
  }

  // Generate math question on component mount
  useEffect(() => {
    generateMathQuestion()
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    // Bot detection - honeypot field should be empty
    if (formData.honeypot) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    // Validate CAPTCHA
    if (parseInt(userAnswer) !== mathQuestion.answer) {
      setSubmitStatus('captcha_error')
      setIsSubmitting(false)
      generateMathQuestion() // Generate new question
      setUserAnswer('')
      return
    }

    try {
      // EmailJS configuration
      await emailjs.send(
        'service_k1l0r4q', // Your EmailJS service ID
        'template_y6m3tuy', // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'Boillot.Cody@gmail.com'
        },
        'VhOPifpJIZp25QWJc' // Your EmailJS public key
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', message: '', honeypot: '' })
      setUserAnswer('')
      generateMathQuestion()
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
        <h1 className="contact-title">Let's Discuss Opportunities</h1>
        <p className="contact-subtitle">
          Ready to build high-performing engineering teams? Let's connect.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              I'm always interested in discussing leadership opportunities, 
              engineering challenges, and strategic tech initiatives.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <a href="mailto:Boillot.Cody@gmail.com">Boillot.Cody@gmail.com</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@company.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company/Organization</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Tell me about the opportunity, your technical challenges, or what you'd like to discuss..."
              ></textarea>
            </div>

            {/* Honeypot field - hidden from users, visible to bots */}
            <div className="honeypot-field">
              <label htmlFor="website">Website (leave blank):</label>
              <input
                type="text"
                id="website"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            {/* Math CAPTCHA */}
            <div className="form-group captcha-group">
              <label htmlFor="captcha">Security Question *</label>
              <div className="captcha-container">
                <span className="math-question">What is {mathQuestion.question}?</span>
                <input
                  type="number"
                  id="captcha"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  required
                  placeholder="Your answer"
                  className="captcha-input"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus === 'success' && (
              <div className="status-message success">
                ✅ Message sent successfully! I'll get back to you within 24 hours.
              </div>
            )}

            {submitStatus === 'captcha_error' && (
              <div className="status-message error">
                ❌ Incorrect answer to security question. Please try again.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="status-message error">
                ❌ Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact